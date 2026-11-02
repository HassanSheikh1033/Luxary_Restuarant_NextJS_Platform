"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * 3D scroll tilt: the block leans back as it enters, settles flat in the middle of
 * the viewport, then tips away as it leaves. `axis="y"` swings it sideways instead.
 */
export default function ScrollTilt({
  children,
  className = "",
  angle = 16,
  axis = "x",
  scaleFrom = 0.9,
}: {
  children: React.ReactNode;
  className?: string;
  angle?: number;
  axis?: "x" | "y";
  scaleFrom?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  const rot = useTransform(p, [0, 0.3, 0.7, 1], [angle, 0, 0, -angle * 0.7]);
  const scale = useTransform(p, [0, 0.3, 0.7, 1], [scaleFrom, 1, 1, scaleFrom + 0.05]);
  const y = useTransform(p, [0, 0.3], [70, 0]);
  const opacity = useTransform(p, [0, 0.18, 0.85, 1], [0, 1, 1, 0.5]);

  return (
    <div ref={ref} style={{ perspective: 1400 }} className={className}>
      <motion.div
        style={{
          ...(axis === "x" ? { rotateX: rot } : { rotateY: rot }),
          scale,
          y,
          opacity,
          transformOrigin: axis === "x" ? "50% 85%" : "50% 50%",
          transformStyle: "preserve-3d",
        }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

/** Card that tilts toward the pointer with a moving gold glare. */
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 160, damping: 16 });
  const ry = useSpring(useMotionValue(0), { stiffness: 160, damping: 16 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(230,201,133,.2), transparent 60%)`;

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.div
        ref={ref}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const r = ref.current!.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          rx.set((0.5 - py) * 12);
          ry.set((px - 0.5) * 14);
          gx.set(px * 100);
          gy.set(py * 100);
        }}
        onMouseLeave={() => {
          rx.set(0);
          ry.set(0);
        }}
        className="group relative h-full"
      >
        {children}
        <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </motion.div>
    </div>
  );
}
