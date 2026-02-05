'use client';

import { motion } from 'framer-motion';

interface GeometricPatternProps {
  position: 'center' | 'left' | 'right';
  color?: string;
  opacity?: number;
}

export default function GeometricPattern({
  position,
  color = '#D4AF37',
  opacity = 0.1,
}: GeometricPatternProps) {
  const positionClasses = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    left: 'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2',
    right: 'top-1/2 right-0 -translate-y-1/2 translate-x-1/2',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} pointer-events-none z-0`}
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: opacity, rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagonal Pattern */}
        <g opacity={opacity}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <polygon
              key={i}
              points="200,50 275,100 275,200 200,250 125,200 125,100"
              fill="none"
              stroke={color}
              strokeWidth="1"
              transform={`rotate(${i * 60} 200 150)`}
            />
          ))}
          
          {/* Inner circles */}
          <circle cx="200" cy="150" r="50" fill="none" stroke={color} strokeWidth="1" />
          <circle cx="200" cy="150" r="80" fill="none" stroke={color} strokeWidth="0.5" />
          <circle cx="200" cy="150" r="110" fill="none" stroke={color} strokeWidth="0.5" />
          
          {/* Decorative dots */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 200 + Math.cos(rad) * 120;
            const y = 150 + Math.sin(rad) * 120;
            return <circle key={angle} cx={x} cy={y} r="3" fill={color} />;
          })}
        </g>
      </svg>
    </motion.div>
  );
}
