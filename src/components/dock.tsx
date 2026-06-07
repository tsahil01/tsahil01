"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CommandMenu } from "./commandMenu";
import { ChatWidget } from "./chatWidget";

// Bottom-left dock: command palette (desktop) + chat (all screens).
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
        </motion.div>
    );
}
