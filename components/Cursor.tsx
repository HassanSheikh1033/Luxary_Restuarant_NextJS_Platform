"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Gold ring that trails the pointer, grows over links and shows a label over [data-cursor]. */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 220, damping: 24, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 220, damping: 24, mass: 0.5 });
  const [mode, setMode] = useState<"idle" | "link" | "label">("idle");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const lab = t.closest<HTMLElement>("[data-cursor]");
      if (lab) {
        setLabel(lab.dataset.cursor || "");
        setMode("label");
      } else if (t.closest("a, button, input, select")) setMode("link");
      else setMode("idle");
    };
    const dn = () => setDown(true);
    const up = () => setDown(false);
    addEventListener("mousemove", move);
    addEventListener("mousedown", dn);
    addEventListener("mouseup", up);
    return () => {
      removeEventListener("mousemove", move);
      removeEventListener("mousedown", dn);
      removeEventListener("mouseup", up);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = mode === "label" ? 96 : mode === "link" ? 64 : 34;

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-gold2"
      />
      <motion.div
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-[199]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ width: size, height: size, scale: down ? 0.85 : 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className={`grid place-items-center rounded-full border border-gold text-[.65rem] uppercase tracking-[.2em] text-bg ${
              mode === "label" ? "bg-gold2/90" : mode === "link" ? "bg-gold/15 backdrop-blur-[2px]" : ""
            }`}
          >
            {mode === "label" && label}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
