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
        className="py-20 px-6"
        style={{ backgroundColor: theme.accentColor }}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal variant="fadeIn" delay={0.2}>
            <div className="text-center mb-16">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-24 h-1 mx-auto mb-6"
                style={{ backgroundColor: theme.primaryColor }}
              />
              <h2
                className={`text-4xl md:text-5xl mb-4 ${fontClass}`}
                style={{ color: theme.secondaryColor }}
              >
                Galeri Momen
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kenangan indah perjalanan cinta kami
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {data.images.map((image, index) => (
              <ScrollReveal
                key={image.id}
                variant="scale"
                delay={0.1 * index}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-auto">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-6">
                    {image.caption && (
                      <p className="text-white text-sm font-medium">
                        {image.caption}
                      </p>
                    )}
                  </div>

                  {/* Corner Accent */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: `${theme.primaryColor}90` }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
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
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={data.images[selectedImage].url}
                alt={data.images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg"
                priority
              />

              {/* Caption */}
              {data.images[selectedImage].caption && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg"
                >
                  <p className="text-white text-center text-lg">
                    {data.images[selectedImage].caption}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
              <p className="text-white text-sm font-medium">
                {selectedImage + 1} / {data.images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
