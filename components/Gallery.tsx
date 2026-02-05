'use client';

import { GallerySection, ThemeConfig } from '@/types/invitation';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  data: GallerySection;
  theme: ThemeConfig;
}

export default function Gallery({ data, theme }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const fontClass = {
    elegant: 'font-serif-elegant',
    modern: 'font-sans-modern',
    romantic: 'font-script',
  }[theme.fontStyle];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? data.images.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === data.images.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <>
      <section
        className="py-12 px-4"
        style={{ backgroundColor: theme.accentColor }}
      >
        <div className="w-full">
          <ScrollReveal variant="fadeIn" delay={0.2}>
            <div className="text-center mb-10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-16 h-1 mx-auto mb-4"
                style={{ backgroundColor: theme.primaryColor }}
              />
              <h2
                className={`text-3xl mb-3 ${fontClass}`}
                style={{ color: theme.secondaryColor }}
              >
                Galeri Momen
              </h2>
              <p className="text-gray-600 text-sm">
                Kenangan indah perjalanan cinta kami
              </p>
            </div>
          </ScrollReveal>

          {/* Grid Layout - 2 columns for mobile */}
          <div className="grid grid-cols-2 gap-3">
            {data.images.map((image, index) => (
              <ScrollReveal
                key={image.id}
                variant="scale"
                delay={0.1 * index}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 480px) 50vw, 240px"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    {image.caption && (
                      <p className="text-white text-xs font-medium">
                        {image.caption}
                      </p>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={data.images[selectedImage].url}
                alt={data.images[selectedImage].alt}
                fill
                className="object-contain rounded-lg"
                priority
                sizes="480px"
              />

              {/* Caption */}
              {data.images[selectedImage].caption && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"
                >
                  <p className="text-white text-center text-sm">
                    {data.images[selectedImage].caption}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              <p className="text-white text-xs font-medium">
                {selectedImage + 1} / {data.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
