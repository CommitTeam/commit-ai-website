
import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-brand-yellow py-6 ${className} flex items-center`}>
      <motion.div
        className="inline-block font-black text-4xl md:text-6xl uppercase italic tracking-tighter"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-12 inline-flex items-center gap-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
