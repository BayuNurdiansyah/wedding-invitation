import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';
import Gallery from '@/components/Gallery';
import FloatingMusicPlayer from '@/components/FloatingMusicPlayer';
import { InvitationData } from '@/types/invitation';

// Simulating data fetching - In production, this could be:
// - API call to your backend
// - Database query
// - CMS integration
// - Dynamic route parameter
async function getInvitationData(): Promise<InvitationData> {
  // Option 1: Static JSON import
  // return await import('@/data/sample-invitation.json');

  // Option 2: Simulated API call
  const data: InvitationData = {
    hero: {
      title: 'The Wedding of',
      brideName: 'Sarah',
      groomName: 'Michael',
      date: '2024-12-15',
      bgImage:
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
      subtitle: 'Join us in celebrating our love',
    },
    events: [
      {
        id: 'akad',
        title: 'Akad Nikah',
        time: '09:00 WIB',
        location: 'Masjid Al-Ikhlas',
        address: 'Jl. Raya Bogor No. 123, Jakarta Selatan',
        mapLink: 'https://maps.google.com/?q=-6.2088,106.8456',
        description: 'Upacara pernikahan sakral',
      },
      {
        id: 'resepsi',
        title: 'Resepsi Pernikahan',
        time: '12:00 - 15:00 WIB',
        location: 'Balai Kartini',
        address: 'Jl. Gatot Subroto No. 456, Jakarta Selatan',
        mapLink: 'https://maps.google.com/?q=-6.2115,106.8452',
        description: 'Perayaan bersama keluarga dan sahabat',
      },
    ],
    gallery: {
      images: [
        {
          id: '1',
          url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
          alt: 'Couple photo 1',
          caption: 'Our engagement day',
        },
        {
          id: '2',
          url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
          alt: 'Couple photo 2',
          caption: 'Pre-wedding photoshoot',
        },
        {
          id: '3',
          url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
          alt: 'Couple photo 3',
          caption: 'Beautiful moments',
        },
        {
          id: '4',
          url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
          alt: 'Couple photo 4',
        },
        {
          id: '5',
          url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
          alt: 'Couple photo 5',
        },
        {
          id: '6',
          url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
          alt: 'Couple photo 6',
        },
      ],
    },
    theme: {
      primaryColor: '#D4AF37',
      secondaryColor: '#8B7355',
      accentColor: '#F5E6D3',
      fontStyle: 'elegant',
    },
    music: {
      url: '/audio/wedding-song.mp3',
      title: 'Perfect',
      artist: 'Ed Sheeran',
      autoplay: false,
    },
  };

  return data;
}

// Main Page Component
export default async function WeddingInvitationPage() {
  // Fetch invitation data
  const invitationData = await getInvitationData();

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <Hero data={invitationData.hero} theme={invitationData.theme} />

      {/* Event Details Section */}
      <EventDetails
        events={invitationData.events}
        theme={invitationData.theme}
      />

      {/* Gallery Section */}
      <Gallery data={invitationData.gallery} theme={invitationData.theme} />

      {/* Footer */}
      <footer
        className="py-12 text-center"
        style={{ backgroundColor: invitationData.theme.secondaryColor }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/90 mb-4 text-lg font-serif-elegant">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada
            kami.
          </p>
          <div
            className="w-16 h-1 mx-auto mb-6"
            style={{ backgroundColor: invitationData.theme.primaryColor }}
          />
          <p className="text-white/80 text-sm">
            Kami yang berbahagia,
          </p>
          <p
            className="text-2xl font-script mt-2"
            style={{ color: invitationData.theme.primaryColor }}
          >
            {invitationData.hero.brideName} & {invitationData.hero.groomName}
          </p>
        </div>
      </footer>

      {/* Floating Music Player */}
      <FloatingMusicPlayer
        music={invitationData.music}
        theme={invitationData.theme}
      />
    </main>
  );
}

// Export metadata for SEO
export const metadata = {
  title: 'Wedding Invitation - Sarah & Michael',
  description: 'Join us in celebrating our special day',
  openGraph: {
    title: 'Wedding Invitation - Sarah & Michael',
    description: 'Join us in celebrating our special day',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200',
        width: 1200,
        height: 630,
        alt: 'Wedding Invitation',
      },
    ],
  },
};
