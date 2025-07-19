import { motion } from "framer-motion";

export interface TimelineItem {
  year: string | number;
  title: string;
  description: string;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className="relative border-l border-gray-200 pl-6">
    {items.map((item, idx) => (
      <motion.li
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}
        className="relative mb-8 ml-4"
      >
        <span className="absolute -left-6 top-1 w-3 h-3 bg-gray-900 rounded-full" />
        <time className="font-semibold text-gray-900">{item.year}</time>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </motion.li>
    ))}
  </ol>
);
