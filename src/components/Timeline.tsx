import React from "react";

export type TimelineItem = {
  date: string;
  title: string;
  description?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative ml-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 mb-8 text-left">
          {/* Timeline bullet */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full" />
          {/* Timeline content */}
          <time className="block text-sm">{item.date}</time>
          <h3 className="text-xl font-bold">{item.title}</h3>
          {item.description && (
            <p className="mt-1 text-gray-400">{item.description}</p>
          )}
        </div>
      ))}
      {/* Vertical line */}
      <div className="absolute left-2 top-0 h-full w-0.5 bg-gray-300" />
    </div>
  );
};

export default Timeline;
