"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Staggered blur-up entrance. Reuses the same easing/blur as the header rotator
// so the whole page-load reads as one intentional motion. Respects reduced-motion.
export function Reveal({
    children,
    delay = 0,
}: {
    children: ReactNode;
    delay?: number;
}) {
    const reduce = useReducedMotion();
    if (reduce) return <>{children}</>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
