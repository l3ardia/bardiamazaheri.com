"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

export interface TimelineItem {
  year: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  icon: ReactNode;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <VerticalTimeline lineColor="#fff1b1" animate={false}>
    {items.map((item, idx) => (
      <VerticalTimelineElement
        key={idx}
        date={String(item.year)}
        dateClassName="!font-semibold text-gray-500 dark:text-gray-400"
        iconStyle={{ color: "#996515", strokeWidth: 2.2 }}
        iconClassName="gold-bg animate-gold"
        icon={item.icon}
        contentStyle={{
          boxShadow: "none",
          background: "transparent",
          padding: "0",
        }}
        contentArrowStyle={{ borderRight: "7px solid transparent" }}
      >
        <motion.div
          className="bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {item.imageUrl && (
            <div className="w-full h-48 relative">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
          )}
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        </motion.div>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);
