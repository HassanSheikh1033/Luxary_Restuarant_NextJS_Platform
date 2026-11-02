"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/** Full-bleed background that drifts slower than the page. Parent must be `relative overflow-hidden`. */
export default function ParallaxBg({
  src,
  amount = 15,
  priority = false,
  offset = ["start end", "end start"],
  className = "",
}: {
  src: string;
  amount?: number;
  priority?: boolean;
  offset?: any;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className={`absolute inset-x-0 -inset-y-[18%] ${className}`}>
        <Image src={src} alt="" fill priority={priority} sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
