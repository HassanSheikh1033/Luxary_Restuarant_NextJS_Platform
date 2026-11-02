"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { EASE } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Image that wipes in while its content settles from a slight zoom. */
export function RevealImage({
  src,
  alt = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  hoverZoom = false,
}: {
  src: string;
  alt?: string;
  sizes?: string;
  className?: string;
  hoverZoom?: boolean;
}) {
  return (
    <motion.div
      data-cursor={hoverZoom ? "View" : undefined}
      className={`group relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1.5, ease: EASE }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${hoverZoom ? "transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]" : ""}`}
        />
      </motion.div>
    </motion.div>
  );
}
