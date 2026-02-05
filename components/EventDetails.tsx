'use client';

import { EventSection, ThemeConfig } from '@/types/invitation';
import ScrollReveal from './ScrollReveal';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

interface EventDetailsProps {
  events: EventSection[];
  theme: ThemeConfig;
}

export default function EventDetails({ events, theme }: EventDetailsProps) {
  const fontClass = {
    elegant: 'font-serif-elegant',
    modern: 'font-sans-modern',
    romantic: 'font-script',
  }[theme.fontStyle];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
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
              Acara Pernikahan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <ScrollReveal
              key={event.id}
              variant="slideUp"
              delay={0.2 * (index + 1)}
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 border-2"
                  style={{ borderColor: `${theme.primaryColor}20` }}
                >
                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 opacity-10"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute -top-6 -right-6"
                    >
                      <circle cx="50" cy="50" r="40" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Event Title */}
                  <div className="relative z-10">
                    <div
                      className="inline-block px-4 py-2 rounded-full mb-4 text-sm font-semibold"
                      style={{
                        backgroundColor: `${theme.primaryColor}15`,
                        color: theme.secondaryColor,
                      }}
                    >
                      {event.title}
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${theme.primaryColor}10` }}
                      >
                        <Clock
                          className="w-5 h-5"
                          style={{ color: theme.primaryColor }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Waktu</p>
                        <p className="text-lg font-semibold text-gray-800">
                          {event.time}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="p-3 rounded-full mt-1"
                        style={{ backgroundColor: `${theme.primaryColor}10` }}
                      >
                        <MapPin
                          className="w-5 h-5"
                          style={{ color: theme.primaryColor }}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Lokasi</p>
                        <p className="text-lg font-semibold text-gray-800 mb-1">
                          {event.location}
                        </p>
                        <p className="text-sm text-gray-600">{event.address}</p>
                      </div>
                    </div>

                    {/* Description */}
                    {event.description && (
                      <p className="text-gray-600 mb-6 italic">
                        {event.description}
                      </p>
                    )}

                    {/* Map Button */}
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      <Navigation className="w-4 h-4" />
                      Buka di Google Maps
                    </a>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{
                    backgroundColor: `${theme.primaryColor}30`,
                    transform: 'scale(0.95)',
                  }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Save the Date Section */}
        <ScrollReveal variant="fadeIn" delay={0.6}>
          <div className="mt-16 text-center">
            <div
              className="inline-block px-8 py-4 rounded-2xl"
              style={{ backgroundColor: `${theme.accentColor}` }}
            >
              <p className="text-gray-700 mb-2">Simpan tanggal ini</p>
              <div className="flex items-center justify-center gap-4">
                <button
                  className="px-6 py-2 rounded-full border-2 font-medium transition-all hover:scale-105"
                  style={{
                    borderColor: theme.primaryColor,
                    color: theme.primaryColor,
                  }}
                  onClick={() => {
                    // Add to calendar logic
                    alert('Fitur kalender akan segera hadir!');
                  }}
                >
                  + Google Calendar
                </button>
                <button
                  className="px-6 py-2 rounded-full border-2 font-medium transition-all hover:scale-105"
                  style={{
                    borderColor: theme.primaryColor,
                    color: theme.primaryColor,
                  }}
                  onClick={() => {
                    // Add to calendar logic
                    alert('Fitur kalender akan segera hadir!');
                  }}
                >
                  + iCal
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
