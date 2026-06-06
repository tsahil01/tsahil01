import { NextRequest, NextResponse } from "next/server";
import { chatConfigured, getMessages } from "@/lib/chat";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    if (!chatConfigured) return NextResponse.json({ configured: false, messages: [], cursor: 0 });

    const sessionId = req.nextUrl.searchParams.get("session");
    const cursor = Number(req.nextUrl.searchParams.get("cursor") || 0);
    if (!sessionId) return NextResponse.json({ configured: true, messages: [], cursor: 0 });

    const messages = await getMessages(sessionId, cursor);
    return NextResponse.json({
        configured: true,
        messages,
        cursor: cursor + messages.length,
    });
}
