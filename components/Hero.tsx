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
  }[theme.fontStyle];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-12">
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
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-transparent" />
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
          <p className="text-white text-sm font-cormorant tracking-wide leading-relaxed">
            Kami Mengundang Anda
            <br />
            pada Pernikahan
          </p>
        </motion.div>

        {/* Circular Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mb-6"
        >
          {/* Decorative Circle Frame */}
          <div className="relative w-64 h-64 mx-auto">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full border-8 border-white/90 shadow-2xl">
              {/* Inner decorative pattern */}
              <div className="absolute inset-2 rounded-full border-4 border-white/60" />
            </div>

            {/* Photo Container */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80"
                alt={`${data.brideName} & ${data.groomName}`}
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>

            {/* Ornamental corners on frame */}
            {[0, 90, 180, 270].map((rotation) => (
              <div
                key={rotation}
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"
                style={{ transform: `rotate(${rotation}deg) translateY(-120px)` }}
              >
                <div className="w-3 h-3 rounded-full bg-white/80 shadow-lg" />
              </div>
            ))}
          </div>

          {/* Floral Ornament Bottom - Purple flowers like design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-80 h-40"
          >
            <svg
              viewBox="0 0 320 160"
              fill="none"
              className="w-full h-full opacity-90"
            >
              {/* Purple/Blue Flower Petals - Left side */}
              <g opacity="0.85">
                {/* Flower 1 - Bottom Left */}
                <ellipse cx="60" cy="120" rx="25" ry="35" fill="#B8A6D9" opacity="0.7" transform="rotate(-20 60 120)" />
                <ellipse cx="50" cy="115" rx="22" ry="32" fill="#C5B5E0" opacity="0.6" transform="rotate(-30 50 115)" />
                <ellipse cx="70" cy="118" rx="20" ry="30" fill="#B8A6D9" opacity="0.65" transform="rotate(-10 70 118)" />
                <circle cx="60" cy="120" r="8" fill="#9B8BB8" opacity="0.8" />
                
                {/* Flower 2 - Mid Left */}
                <ellipse cx="90" cy="100" rx="28" ry="38" fill="#C5B5E0" opacity="0.75" transform="rotate(-25 90 100)" />
                <ellipse cx="85" cy="95" rx="24" ry="34" fill="#D4C9E8" opacity="0.65" transform="rotate(-35 85 95)" />
                <ellipse cx="95" cy="105" rx="22" ry="32" fill="#B8A6D9" opacity="0.7" transform="rotate(-15 95 105)" />
                <circle cx="90" cy="100" r="9" fill="#9B8BB8" opacity="0.85" />
              </g>

              {/* Purple/Blue Flower Petals - Right side */}
              <g opacity="0.85">
                {/* Flower 3 - Bottom Right */}
                <ellipse cx="260" cy="120" rx="25" ry="35" fill="#B8A6D9" opacity="0.7" transform="rotate(20 260 120)" />
                <ellipse cx="270" cy="115" rx="22" ry="32" fill="#C5B5E0" opacity="0.6" transform="rotate(30 270 115)" />
                <ellipse cx="250" cy="118" rx="20" ry="30" fill="#B8A6D9" opacity="0.65" transform="rotate(10 250 118)" />
                <circle cx="260" cy="120" r="8" fill="#9B8BB8" opacity="0.8" />
                
                {/* Flower 4 - Mid Right */}
                <ellipse cx="230" cy="100" rx="28" ry="38" fill="#C5B5E0" opacity="0.75" transform="rotate(25 230 100)" />
                <ellipse cx="235" cy="95" rx="24" ry="34" fill="#D4C9E8" opacity="0.65" transform="rotate(35 235 95)" />
                <ellipse cx="225" cy="105" rx="22" ry="32" fill="#B8A6D9" opacity="0.7" transform="rotate(15 225 105)" />
                <circle cx="230" cy="100" r="9" fill="#9B8BB8" opacity="0.85" />
              </g>

              {/* Center smaller flowers */}
              <g opacity="0.7">
                <ellipse cx="130" cy="110" rx="18" ry="26" fill="#D4C9E8" opacity="0.6" transform="rotate(-15 130 110)" />
                <ellipse cx="190" cy="110" rx="18" ry="26" fill="#D4C9E8" opacity="0.6" transform="rotate(15 190 110)" />
              </g>

              {/* Leaves/Stems */}
              <g opacity="0.5">
                <ellipse cx="100" cy="130" rx="8" ry="20" fill="#A8C5A8" transform="rotate(45 100 130)" />
                <ellipse cx="220" cy="130" rx="8" ry="20" fill="#A8C5A8" transform="rotate(-45 220 130)" />
                <ellipse cx="160" cy="125" rx="6" ry="18" fill="#B5D4B5" transform="rotate(0 160 125)" />
              </g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 mb-6"
        >
          <h1 className={`text-5xl text-black mb-2 font-pinyon italic`}>
            {data.brideName} & {data.groomName}
          </h1>
          <p className="text-black text-sm tracking-wider mt-2">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-black text-xs font-semibold mb-3 tracking-wider">
              Ar-Rum : 21
            </p>
            <p className="text-black text-xs leading-relaxed text-justify" style={{ textAlignLast: 'center' }}>
              "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
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