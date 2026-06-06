"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface Track {
    isPlaying: boolean;
    configured?: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumArt?: string;
    url?: string;
}

function Equalizer() {
    return (
        <span className="flex items-end gap-[1.5px] h-2" aria-hidden>
            {[0, 180, 360].map((delay, i) => (
                <span
                    key={i}
                    className="w-[1.5px] rounded-full bg-foreground animate-eq"
                    style={{ animationDelay: `${delay}ms` }}
                />
            ))}
        </span>
    );
}

function Cover({ track, size }: { track: Track; size: string }) {
    return (
        <span className="relative flex-shrink-0">
            {track.albumArt ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={track.albumArt}
                    alt={track.album || ""}
                    className={`${size} rounded-md object-cover ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105`}
                />
            ) : (
                <span className={`${size} flex items-center justify-center rounded-md bg-muted text-primary/40 ring-1 ring-border/60`}>♪</span>
            )}
            <span className="absolute -bottom-1 -right-1 flex items-center justify-center rounded-full border border-border/60 bg-background p-[3px] leading-none">
                {track.isPlaying ? (
                    <Equalizer />
                ) : (
                    <span className="block text-[8px] text-primary/40 leading-none">♪</span>
                )}
            </span>
        </span>
    );
}

export function NowPlaying({ variant = "full" }: { variant?: "full" | "mini" }) {
    const [track, setTrack] = useState<Track | null>(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        let active = true;
        const load = async () => {
            try {
                const res = await fetch("/api/now-playing");
                const data = await res.json();
                if (active) setTrack(data);
            } catch {
                /* ignore transient errors */
            }
        };
        load();
        const id = setInterval(load, 30000); // refresh every 30s
        return () => {
            active = false;
            clearInterval(id);
        };
    }, []);

    // Only render while a track is actively playing. Not configured, loading,
    if (!track || track.configured === false || !track.title || !track.isPlaying) return null;

    const ytMusicUrl = `https://music.youtube.com/search?q=${encodeURIComponent(`${track.title} ${track.artist ?? ""}`.trim())}`;

    const TrackText = (
        <span className="flex flex-col min-w-0 leading-tight">
            <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-primary/40">
                listening
            </span>
            <span className="truncate max-w-[150px] sm:max-w-[190px] text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                {track.title}
            </span>
            <span className="truncate max-w-[150px] sm:max-w-[190px] text-[11px] text-primary/40">
                {track.artist}
            </span>
        </span>
    );

    if (variant === "mini") {
        return (
            <div className="fixed top-4 right-4 z-40 font-mono">
                <div className="group flex items-center rounded-xl border border-border/50 bg-background shadow-lg shadow-black/30 transition-colors hover:border-primary/40 animate-in fade-in slide-in-from-top-2 duration-500">
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        aria-label={expanded ? "Collapse now playing" : `Now playing: ${track.title} by ${track.artist}. Tap to expand.`}
                        aria-expanded={expanded}
                        className="flex-shrink-0 p-1.5"
                    >
                        <Cover track={track} size="w-10 h-10" />
                    </button>

                    <div
                        className={`flex items-center overflow-hidden transition-[max-width,opacity] duration-300 ease-out ${
                            expanded ? "max-w-[230px] opacity-100" : "max-w-0 opacity-0"
                        }`}
                    >
                        <Link
                            href={ytMusicUrl}
                            target="_blank"
                            aria-label={`Open ${track.title} by ${track.artist} on YouTube Music`}
                            className="min-w-0 pl-0.5"
                        >
                            {TrackText}
                        </Link>
                        <button
                            onClick={() => setExpanded(false)}
                            aria-label="Collapse now playing"
                            className="mx-1.5 flex-shrink-0 text-primary/40 hover:text-primary transition-colors"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            href={ytMusicUrl}
            target="_blank"
            aria-label={`${track.isPlaying ? "Now playing" : "Last played"}: ${track.title} by ${track.artist}`}
            className="group inline-flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/60 py-1.5 pl-1.5 pr-3 font-mono shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:bg-background/80 animate-in fade-in slide-in-from-top-2 duration-500"
        >
            <Cover track={track} size="w-10 h-10" />
            {TrackText}
        </Link>
    );
}
