import { Redis } from "@upstash/redis";

export const chatConfigured =
    !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = chatConfigured
    ? new Redis({
          url: process.env.UPSTASH_REDIS_REST_URL!,
          token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      })
    : null;

export interface ChatMessage {
    id: string;
    from: "visitor" | "sahil";
    text: string;
    ts: number;
}

const TTL = 60 * 60 * 24 * 7; // keep a conversation for 7 days

export async function addMessage(sessionId: string, msg: ChatMessage) {
    if (!redis) return;
    const key = `chat:${sessionId}`;
    await redis.rpush(key, msg);
    await redis.expire(key, TTL);
}

export async function getMessages(sessionId: string, from = 0): Promise<ChatMessage[]> {
    if (!redis) return [];
    return (await redis.lrange<ChatMessage>(`chat:${sessionId}`, from, -1)) ?? [];
}

// Map a Telegram message id -> visitor session, so a reply can be routed back.
export async function mapTgMessage(messageId: number, sessionId: string) {
    if (!redis) return;
    await redis.set(`tgmap:${messageId}`, sessionId, { ex: TTL });
    await redis.set("chat:last", sessionId, { ex: TTL });
}

export async function sessionForTgMessage(messageId: number): Promise<string | null> {
    if (!redis) return null;
    return (await redis.get<string>(`tgmap:${messageId}`)) ?? null;
}

export async function lastSession(): Promise<string | null> {
    if (!redis) return null;
    return (await redis.get<string>("chat:last")) ?? null;
}

// Simple per-session rate limit: returns true if allowed.
export async function rateOk(sessionId: string, limit = 12, windowSec = 60): Promise<boolean> {
    if (!redis) return true;
    const key = `rl:${sessionId}`;
    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, windowSec);
    return count <= limit;
}

export async function sendToTelegram(text: string): Promise<number | null> {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) return null;
    try {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ chat_id: chatId, text }),
        });
        const data = await res.json();
        return data?.result?.message_id ?? null;
    } catch {
        return null;
    }
}
