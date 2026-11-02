"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

/** Re-mounts on every navigation: a gold-edged curtain lifts and the page fades in. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[95] origin-top border-b border-gold bg-bg"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, ease: EASE }}>
        {children}
      </motion.div>
    </>
  );
}
