'use client';

import { MusicConfig, ThemeConfig } from '@/types/invitation';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface FloatingMusicPlayerProps {
  music?: MusicConfig;
  theme: ThemeConfig;
}

export default function FloatingMusicPlayer({
  music,
  theme,
}: FloatingMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!music) return;

    const audio = new Audio(music.url);
    audio.loop = true;
    audio.volume = 0.7;
    audioRef.current = audio;

    if (music.autoplay) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log('Autoplay prevented:', error);
          });
      }
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [music]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  if (!music) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Expanded Info */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-3 glass-effect rounded-xl p-3 min-w-[200px] shadow-2xl"
              style={{ borderColor: `${theme.primaryColor}30` }}
            >
              <div className="flex items-start gap-2">
                <div
                  className="p-2 rounded-lg animate-pulse-slow"
                  style={{ backgroundColor: `${theme.primaryColor}20` }}
                >
                  <Music
                    className="w-4 h-4"
                    style={{ color: theme.primaryColor }}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm mb-1">
                    {music.title}
                  </p>
                  <p className="text-xs text-gray-600">{music.artist}</p>
                </div>
              </div>

              {/* Volume Control */}
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-3 h-3 text-gray-600" />
                  ) : (
                    <Volume2 className="w-3 h-3 text-gray-600" />
                  )}
                </button>
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: theme.primaryColor }}
                    initial={{ width: '50%' }}
                    animate={{ width: isMuted ? '0%' : '50%' }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Player Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          onTouchStart={() => setIsExpanded(true)}
          className="relative group"
        >
          {/* Animated Rings */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: theme.primaryColor }}
                animate={{
                  scale: [1, 1.5, 1.5],
                  opacity: [0.5, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: theme.primaryColor }}
                animate={{
                  scale: [1, 1.3, 1.3],
                  opacity: [0.7, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 0.5,
                }}
              />
            </>
          )}

          {/* Button */}
          <div
            className="relative w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:shadow-3xl"
            style={{ backgroundColor: theme.primaryColor }}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" fill="white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
            )}

            {/* Spinning Vinyl Effect */}
            {isPlaying && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            )}
          </div>
        </motion.button>

        {/* Status Indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white"
          style={{
            backgroundColor: isPlaying ? '#10b981' : '#ef4444',
          }}
          animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
          transition={
            isPlaying
              ? { duration: 1, repeat: Infinity, ease: 'easeInOut' }
              : {}
          }
        />
      </div>
    </motion.div>
  );
}
