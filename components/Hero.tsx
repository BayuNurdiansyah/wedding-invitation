'use client';

import { HeroSection, ThemeConfig } from '@/types/invitation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FloralOrnament from './ornaments/FloralOrnament';

interface HeroProps {
  data: HeroSection;
  theme: ThemeConfig;
}

export default function Hero({ data, theme }: HeroProps) {
  const fontClass = {
    elegant: 'font-serif-elegant',
    modern: 'font-sans-modern',
    romantic: 'font-script',
  }[theme.fontStyle];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt="Wedding background"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Ornaments */}
      <FloralOrnament position="top-left" color={theme.primaryColor} />
      <FloralOrnament position="top-right" color={theme.primaryColor} />
      <FloralOrnament position="bottom-left" color={theme.primaryColor} />
      <FloralOrnament position="bottom-right" color={theme.primaryColor} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p
            className={`text-sm md:text-lg tracking-widest mb-4 text-white/90 uppercase ${fontClass}`}
          >
            {data.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-8"
        >
          <h1 className={`text-5xl md:text-7xl lg:text-8xl text-white mb-4 ${fontClass}`}>
            {data.brideName}
            <span
              className="block text-3xl md:text-5xl my-4"
              style={{ color: theme.primaryColor }}
            >
              &
            </span>
            {data.groomName}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass-effect inline-block px-8 py-4 rounded-full">
            <time className="text-lg md:text-xl text-white font-medium">
              {new Date(data.date).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </motion.div>

        {data.subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 text-white/80 text-lg"
          >
            {data.subtitle}
          </motion.p>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
