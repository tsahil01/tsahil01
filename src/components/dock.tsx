"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CommandMenu } from "./commandMenu";
import { ChatWidget } from "./chatWidget";
import { LocalTime } from "./localTime";

// Bottom-left dock: command palette + chat + local time, in one row.
// Chat stays on phones; the ⌘k trigger and clock are desktop-only.
export function Dock() {
    const reduce = useReducedMotion();
    return (
        <motion.div
            className="fixed bottom-4 left-4 z-40 flex items-center gap-2"
            initial={reduce ? false : { opacity: 0, x: -12, y: 6 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <CommandMenu />
            <ChatWidget />
            <div className="hidden sm:block">
                <LocalTime />
            </div>
        </motion.div>
    );
}
