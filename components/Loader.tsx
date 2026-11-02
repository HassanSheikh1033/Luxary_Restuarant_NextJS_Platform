"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.documentElement.style.overflow = "";
    }, 1700);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-content-center gap-6 bg-bg text-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="font-serif text-[clamp(1.8rem,4vw,3rem)] tracking-[.08em]"
          >
            Maison <em className="text-gold2">Aurelia</em>
          </motion.div>
          <div className="mx-auto h-px w-[200px] overflow-hidden bg-line">
            <motion.div
              className="h-full bg-gold"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.4, ease: EASE }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
