"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, ArrowUp, MessageSquare } from "lucide-react";

interface Msg {
    id: string;
    from: "visitor" | "sahil";
    text: string;
    ts: number;
}

function getSessionId() {
    let id = localStorage.getItem("chat-session");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("chat-session", id);
    }
    return id;
}

export function ChatWidget() {
    const [configured, setConfigured] = useState<boolean | null>(null);
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState("");
    const [sending, setSending] = useState(false);

    const cursorRef = useRef(0);
    const sessionRef = useRef("");
    const listRef = useRef<HTMLDivElement>(null);

    const poll = useCallback(async () => {
        const s = sessionRef.current;
        if (!s) return;
        try {
            const res = await fetch(`/api/chat/poll?session=${s}&cursor=${cursorRef.current}`);
            const data = await res.json();
            setConfigured(!!data.configured);
            if (data.messages?.length) {
                cursorRef.current = data.cursor;
                setMessages((m) => [...m, ...data.messages]);
            }
        } catch {
            /* ignore */
        }
    }, []);

    useEffect(() => {
        sessionRef.current = getSessionId();
        poll();
    }, [poll]);

    useEffect(() => {
        if (!open) return;
        poll();
        const id = setInterval(poll, 4000);
        return () => clearInterval(id);
    }, [open, poll]);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, open]);

    const send = async () => {
        const text = input.trim();
        if (!text || sending) return;
        setInput("");
        setSending(true);
        try {
            await fetch("/api/chat/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId: sessionRef.current, text }),
            });
            await poll();
        } catch {
            /* ignore */
        } finally {
            setSending(false);
        }
    };

    if (!configured) return null;

    return (
        <>
            <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Chat with Sahil"
                className="inline-flex items-center justify-center rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-primary/60 shadow-lg shadow-black/20 transition-colors hover:border-primary/40 hover:text-primary"
            >
                <MessageSquare className="h-4 w-4" />
            </button>

            {open && (
                <div className="fixed bottom-16 left-4 z-50 font-mono flex h-[420px] w-[320px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-border/60 bg-background shadow-2xl animate-in fade-in slide-in-from-bottom-3 zoom-in-95 duration-200">
                    {/* header */}
                    <div className="flex items-center justify-between border-b border-border/50 px-3 py-2.5">
                        <span className="text-xs text-primary/60">
                            <span className="text-primary/30">❯</span> chat with sahil
                        </span>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                            className="text-primary/40 transition-colors hover:text-primary"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {/* messages */}
                    <div ref={listRef} className="flex flex-1 flex-col gap-2 overflow-y-auto px-3 py-3">
                        {messages.length === 0 ? (
                            <p className="m-auto px-4 text-center text-xs leading-relaxed text-primary/40">
                                <span className="text-primary/30">{"// "}</span>
                                say hi. i get a ping and reply right here.
                            </p>
                        ) : (
                            messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={`max-w-[82%] rounded-lg px-2.5 py-1.5 text-xs leading-relaxed ${
                                        m.from === "visitor"
                                            ? "self-end bg-muted text-foreground"
                                            : "self-start border border-border/50 bg-primary/[0.05] text-primary/80"
                                    }`}
                                >
                                    {m.text}
                                </div>
                            ))
                        )}
                    </div>

                    {/* input */}
                    <div className="flex items-center gap-2 border-t border-border/50 px-3 py-2">
                        <span className="select-none text-primary/30">❯</span>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") send();
                            }}
                            placeholder="type a message..."
                            maxLength={1000}
                            className="flex-1 bg-transparent text-xs text-foreground outline-none placeholder:text-primary/30"
                        />
                        <button
                            onClick={send}
                            disabled={!input.trim() || sending}
                            aria-label="Send message"
                            className="text-primary/40 transition-colors hover:text-primary disabled:opacity-30"
                        >
                            <ArrowUp className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
