'use client';

import { HeroSection, ThemeConfig } from '@/types/invitation';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  data: HeroSection;
  theme: ThemeConfig;
}

export default function Hero({ data, theme }: HeroProps) {
  const fontClass = {
    elegant: 'font-serif-elegant',
    modern: 'font-sans-modern',
    romantic: 'font-script',
    pinyon: 'font-pinyon',
  }[theme.fontStyle];

  return (
    <section className="relative min-h-[150hv] flex items-center justify-center overflow-hidden px-6 py-12">
      {/* Background Image with Heavy Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImage}
          alt="Wedding background"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="480px"
        />
        {/* Heavy blur overlay */}
        {/* bg-gradient-to-b from-black/40 via-black/30 to-black/50 */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center w-full max-w-md">
        {/* Top Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-white font-bold text-lg font-cormorant tracking-wide leading-relaxed">
            Kami Mengundang Anda
            <br />
            pada Pernikahan
          </p>
        </motion.div>

         {/* Photo with Frame - Using Actual Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          {/* Container for layered images */}
          <div className="relative w-72 h-72 mx-auto">
            {/* Couple Photo - Behind Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56 rounded-full overflow-hidden">
                <Image
                  src="/img/hero/foto-depan.png"
                  alt={`${data.brideName} & ${data.groomName}`}
                  fill
                  className="object-cover"
                  sizes="224px"
                  priority
                />
              </div>
            </div>

            {/* Frame Image - On Top of Photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72">
                <Image
                  src="/img/hero/bingkai-foto.png"
                  alt="Frame"
                  fill
                  className="object-contain"
                  sizes="288px"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-4 mb-6"
        >
          <h1 className={`text-5xl text-black mb-1`} style={{ fontFamily: "'Pinyon Script', cursive" }}>
            {data.brideName} & {data.groomName}
          </h1>
          <p className="text-black text-lg tracking-wider mt-1">
            {new Date(data.date).toLocaleDateString('id-ID', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </motion.div>

        {/* Ar-Rum Verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <div className="pr-2 pl-2 text-sm text-center">
            <p className="text-black text-lg font-semibold mb-3 tracking-normal">
              Ar-Rum : 21
            </p>
            <p className="text-black text-xs leading-relaxed">
              “Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-5 h-5 text-white mx-auto"
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