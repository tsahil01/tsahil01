"use client";

import { Command } from "cmdk";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Search,
    Home,
    FolderGit2,
    GitPullRequest,
    Mail,
    Copy,
} from "lucide-react";
import { SiGithub, SiX, SiLinkedin, SiTelegram } from "react-icons/si";
import { LocalTime } from "./localTime";

const EMAIL = "sahiltiwaskar2003@gmail.com";

const socials = [
    { name: "github", url: "https://github.com/tsahil01", icon: <SiGithub className="w-4 h-4" /> },
    { name: "x / twitter", url: "https://x.com/sahiltwtz", icon: <SiX className="w-4 h-4" /> },
    { name: "linkedin", url: "https://www.linkedin.com/in/sahil-tiwaskar/", icon: <SiLinkedin className="w-4 h-4" /> },
    { name: "telegram", url: "https://t.me/SahilTiwaskar", icon: <SiTelegram className="w-4 h-4" /> },
];

const itemClass =
    "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-primary/70 cursor-pointer transition-colors data-[selected=true]:bg-muted data-[selected=true]:text-foreground";

export function CommandMenu() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, []);

    const run = useCallback((fn: () => void) => {
        setOpen(false);
        fn();
    }, []);

    const go = (href: string) => run(() => router.push(href));
    const ext = (url: string) => run(() => window.open(url, "_blank"));
    const copyEmail = () => run(() => navigator.clipboard?.writeText(EMAIL));

    return (
        <>
            <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2">
                <button
                    onClick={() => setOpen(true)}
                    aria-label="Open command menu"
                    className="group inline-flex items-center gap-2 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 font-mono text-xs text-primary/50 shadow-lg shadow-black/20 transition-colors hover:border-primary/40 hover:text-primary"
                >
                    <Search className="w-3.5 h-3.5" />
                    <span className="hidden sm:flex items-center gap-1">
                        <kbd className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border border-border/60 bg-muted/40 text-[12px] leading-none text-primary/50 group-hover:text-primary/70 transition-colors">⌘</kbd>
                        <kbd className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border border-border/60 bg-muted/40 text-[11px] lowercase leading-none text-primary/50 group-hover:text-primary/70 transition-colors">k</kbd>
                    </span>
                    <span className="sm:hidden">menu</span>
                </button>
                <LocalTime />
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[18vh] backdrop-blur-sm animate-in fade-in duration-150"
                    onClick={() => setOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg overflow-hidden rounded-xl border border-border/60 bg-background font-mono shadow-2xl animate-in fade-in zoom-in-95 duration-150"
                    >
                        <Command label="Command menu" className="flex flex-col">
                            <div className="flex items-center gap-2 border-b border-border/50 px-3">
                                <span className="text-primary/40 select-none">❯</span>
                                <Command.Input
                                    autoFocus
                                    placeholder="type a command or search..."
                                    className="w-full bg-transparent py-3 text-sm text-foreground placeholder:text-primary/30 outline-none"
                                />
                            </div>
                            <Command.List className="max-h-[320px] overflow-y-auto p-2">
                                <Command.Empty className="px-2.5 py-6 text-center text-sm text-primary/40">
                                    no results.
                                </Command.Empty>

                                <Command.Group
                                    heading="navigation"
                                    className="[&_[cmdk-group-heading]]:px-2.5 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.14em] [&_[cmdk-group-heading]]:text-primary/30"
                                >
                                    <Command.Item className={itemClass} onSelect={() => go("/")}>
                                        <Home className="w-4 h-4 text-primary/40" /> home
                                    </Command.Item>
                                    <Command.Item className={itemClass} onSelect={() => go("/projects")}>
                                        <FolderGit2 className="w-4 h-4 text-primary/40" /> projects
                                    </Command.Item>
                                    <Command.Item value="open source logs prs" className={itemClass} onSelect={() => go("/logs")}>
                                        <GitPullRequest className="w-4 h-4 text-primary/40" /> open source
                                    </Command.Item>
                                </Command.Group>

                                <Command.Group
                                    heading="connect"
                                    className="[&_[cmdk-group-heading]]:px-2.5 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.14em] [&_[cmdk-group-heading]]:text-primary/30"
                                >
                                    {socials.map((s) => (
                                        <Command.Item key={s.name} value={s.name} className={itemClass} onSelect={() => ext(s.url)}>
                                            <span className="text-primary/40">{s.icon}</span> {s.name}
                                        </Command.Item>
                                    ))}
                                    <Command.Item value="email mail" className={itemClass} onSelect={() => ext(`mailto:${EMAIL}`)}>
                                        <Mail className="w-4 h-4 text-primary/40" /> email
                                    </Command.Item>
                                    <Command.Item value="copy email" className={itemClass} onSelect={copyEmail}>
                                        <Copy className="w-4 h-4 text-primary/40" /> copy email
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </div>
                </div>
            )}
        </>
    );
}
