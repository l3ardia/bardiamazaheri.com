"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export interface TimelineItem {
  year: string | number;
  title: string;
  description: string;
}

export const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <VerticalTimeline lineColor="#e5e7eb" animate={false}>
    {items.map((item, idx) => (
      <VerticalTimelineElement
        key={idx}
        date={String(item.year)}
        iconStyle={{ background: "#111", color: "#fff" }}
        contentStyle={{ boxShadow: "none", background: "transparent" }}
        contentArrowStyle={{ borderRight: "7px solid transparent" }}
      >
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);
