"use client"

import { motion } from "framer-motion";

export interface TimelineItem {
  year: string | number;
  title: string;
  description: string;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className="relative border-l border-secondary-300 pl-10">
    {items.map((item, idx) => (
      <motion.li
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}
        className="relative mb-12 ml-6"
      >
        <span className="absolute -left-5 top-3 w-4 h-4 rounded-full bg-gradient-to-b from-secondary-400 to-secondary-600 border-2 border-white shadow" />
        <div className="flex gap-4">
          <div className="w-24 text-right pr-2">
            <time className="block text-2xl font-extrabold text-secondary-700">
              {item.year}
            </time>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      </motion.li>
    ))}
  </ol>
);
