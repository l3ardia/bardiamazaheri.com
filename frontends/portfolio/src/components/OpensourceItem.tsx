"use client";
import { motion } from "framer-motion";

export const OpenSourceItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="mb-10"
  >
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="space-y-4 text-gray-700">{children}</div>
  </motion.div>
);