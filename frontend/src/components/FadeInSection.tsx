"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { ReactNode } from "react";

type FadeInFromProps = {
  children: ReactNode;
  direction: "left" | "right" | "top" | "bottom";
};

export default function FadeInFrom({
  children,
  direction = "bottom",
}: FadeInFromProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "top":
        return { opacity: 0, y: -50 };
      case "bottom":
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
