"use client";

import { useEffect, useState } from "react";

function getIST() {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    })
        .format(new Date())
        .toLowerCase();
}

export function LocalTime() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const tick = () => setTime(getIST());
        tick();
        const id = setInterval(tick, 30000);
        return () => clearInterval(id);
    }, []);

    if (!time) return null;

    return (
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 font-mono text-xs">
            <span className="text-primary/60">{time}</span>
            <span className="text-primary/30">·</span>
            <span className="text-primary/50">bengaluru</span>
        </div>
    );
}
