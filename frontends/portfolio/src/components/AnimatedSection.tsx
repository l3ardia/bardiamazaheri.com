"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (inView && !hasStarted.current) {
      controls.start({ opacity: 1, y: 0 });
      hasStarted.current = true;
    } else if (!hasStarted.current) {
      // Fallback: Force animation after delay if never in view
      const timeout = setTimeout(() => {
        controls.start({ opacity: 1, y: 0 });
        hasStarted.current = true;
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-12"
    >
      {children}
    </motion.section>
  );
};
