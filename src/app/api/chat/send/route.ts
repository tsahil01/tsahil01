import { NextRequest, NextResponse } from "next/server";
import { addMessage, chatConfigured, mapTgMessage, rateOk, sendToTelegram } from "@/lib/chat";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    if (!chatConfigured) return NextResponse.json({ ok: false, configured: false });

    const body = await req.json().catch(() => ({}));
    const sessionId: string = body?.sessionId;
    const text: string = body?.text;

    if (!sessionId || typeof text !== "string" || !text.trim()) {
        return NextResponse.json({ ok: false }, { status: 400 });
    }
    if (!(await rateOk(sessionId))) {
        return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
    }

    const clean = text.trim().slice(0, 1000);
    const msg = {
        id: crypto.randomUUID(),
        from: "visitor" as const,
        text: clean,
        ts: Date.now(),
    };
    await addMessage(sessionId, msg);

    const short = sessionId.slice(0, 6);
    const tgId = await sendToTelegram(`💬 visitor ${short}\n\n${clean}\n\n↩️ reply to this message to respond`);
    if (tgId) await mapTgMessage(tgId, sessionId);

    return NextResponse.json({ ok: true, configured: true });
}
