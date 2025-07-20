"use client";
import { motion } from "framer-motion";
import { SkillCategory } from "@/data/skills";

export const SkillCard = ({ category }: { category: SkillCategory }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="p-6 border rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
  >
    <h3 className="font-semibold mb-2">{category.title}</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-1">
      {category.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </motion.div>
);
