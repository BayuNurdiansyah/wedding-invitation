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
    <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
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
              Acara Pernikahan
            </h2>
            <p className="text-gray-600 text-sm px-4">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
              Bapak/Ibu/Saudara/i berkenan hadir
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {events.map((event, index) => (
            <ScrollReveal
              key={event.id}
              variant="slideUp"
              delay={0.2 * (index + 1)}
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border-2"
                  style={{ borderColor: `${theme.primaryColor}20` }}
                >
                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-10"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    <svg
                      viewBox="0 0 100 100"
                      className="absolute -top-4 -right-4"
                    >
                      <circle cx="50" cy="50" r="40" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Event Title */}
                  <div className="relative z-10">
                    <div
                      className="inline-block px-3 py-1 rounded-full mb-3 text-xs font-semibold"
                      style={{
                        backgroundColor: `${theme.primaryColor}15`,
                        color: theme.secondaryColor,
                      }}
                    >
                      {event.title}
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="p-2 rounded-full"
                        style={{ backgroundColor: `${theme.primaryColor}10` }}
                      >
                        <Clock
                          className="w-4 h-4"
                          style={{ color: theme.primaryColor }}
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Waktu</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {event.time}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-2 mb-3">
                      <div
                        className="p-2 rounded-full mt-1"
                        style={{ backgroundColor: `${theme.primaryColor}10` }}
                      >
                        <MapPin
                          className="w-4 h-4"
                          style={{ color: theme.primaryColor }}
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Lokasi</p>
                        <p className="text-sm font-semibold text-gray-800 mb-1">
                          {event.location}
                        </p>
                        <p className="text-xs text-gray-600">{event.address}</p>
                      </div>
                    </div>

                    {/* Description */}
                    {event.description && (
                      <p className="text-gray-600 text-xs mb-4 italic">
                        {event.description}
                      </p>
                    )}

                    {/* Map Button */}
                    <a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105 w-full justify-center"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      <Navigation className="w-4 h-4" />
                      Buka di Google Maps
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Save the Date Section */}
        <ScrollReveal variant="fadeIn" delay={0.6}>
          <div className="mt-10 text-center">
            <div
              className="inline-block px-6 py-3 rounded-2xl"
              style={{ backgroundColor: `${theme.accentColor}` }}
            >
              <p className="text-gray-700 mb-2 text-sm">Simpan tanggal ini</p>
              <div className="flex flex-col gap-2">
                <button
                  className="px-4 py-2 rounded-full border-2 text-sm font-medium transition-all hover:scale-105"
                  style={{
                    borderColor: theme.primaryColor,
                    color: theme.primaryColor,
                  }}
                  onClick={() => {
                    alert('Fitur kalender akan segera hadir!');
                  }}
                >
                  + Google Calendar
                </button>
                <button
                  className="px-4 py-2 rounded-full border-2 text-sm font-medium transition-all hover:scale-105"
                  style={{
                    borderColor: theme.primaryColor,
                    color: theme.primaryColor,
                  }}
                  onClick={() => {
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
