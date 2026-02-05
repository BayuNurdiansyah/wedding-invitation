'use client';

import { motion } from 'framer-motion';

interface FloralOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
  size?: number;
}

export default function FloralOrnament({
  position,
  color = '#D4AF37',
  size = 200,
}: FloralOrnamentProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} pointer-events-none z-10 ornament-shadow`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main decorative path */}
        <path
          d="M20 20C20 20 40 40 60 30C80 20 90 10 100 20C110 30 120 40 140 30C160 20 180 20 180 20"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Decorative circles */}
        <circle cx="60" cy="30" r="8" fill={color} opacity="0.6" />
        <circle cx="100" cy="20" r="6" fill={color} opacity="0.6" />
        <circle cx="140" cy="30" r="8" fill={color} opacity="0.6" />
        
        {/* Secondary path */}
        <path
          d="M30 40C30 40 50 60 70 50C90 40 100 30 110 40"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Small accent circles */}
        <circle cx="40" cy="50" r="4" fill={color} opacity="0.4" />
        <circle cx="70" cy="50" r="4" fill={color} opacity="0.4" />
        
        {/* Leaf-like elements */}
        <ellipse cx="60" cy="40" rx="10" ry="5" fill={color} opacity="0.3" transform="rotate(45 60 40)" />
        <ellipse cx="100" cy="30" rx="10" ry="5" fill={color} opacity="0.3" transform="rotate(-45 100 30)" />
        <ellipse cx="140" cy="40" rx="10" ry="5" fill={color} opacity="0.3" transform="rotate(45 140 40)" />
      </svg>
    </motion.div>
  );
}