"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Props for the FadeIn motion wrapper.
 */
export type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Subtle fade-in motion wrapper.
 */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
