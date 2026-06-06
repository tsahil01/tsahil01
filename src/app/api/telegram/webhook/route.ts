import { NextRequest, NextResponse } from "next/server";
import { addMessage, lastSession, sessionForTgMessage } from "@/lib/chat";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    // Verify the request really comes from Telegram (secret set when registering the webhook).
    const secret = req.headers.get("x-telegram-bot-api-secret-token");
    if (process.env.TELEGRAM_WEBHOOK_SECRET && secret !== process.env.TELEGRAM_WEBHOOK_SECRET) {
        return NextResponse.json({ ok: false }, { status: 401 });
    }

    const update = await req.json().catch(() => null);
    const message = update?.message;
    const text: string | undefined = message?.text;
    if (!text) return NextResponse.json({ ok: true }); // ignore non-text updates

    // Only accept replies from the owner's chat.
    const fromChatId = String(message?.chat?.id ?? "");
    if (process.env.TELEGRAM_CHAT_ID && fromChatId !== String(process.env.TELEGRAM_CHAT_ID)) {
        return NextResponse.json({ ok: true });
    }

    // Route: prefer reply-to mapping, fall back to the most recently active session.
    let sessionId: string | null = null;
    const replyToId = message?.reply_to_message?.message_id;
    if (replyToId) sessionId = await sessionForTgMessage(replyToId);
    if (!sessionId) sessionId = await lastSession();
    if (!sessionId) return NextResponse.json({ ok: true });

    await addMessage(sessionId, {
        id: crypto.randomUUID(),
        from: "sahil",
        text: text.trim().slice(0, 1000),
        ts: Date.now(),
    });

    return NextResponse.json({ ok: true });
}
