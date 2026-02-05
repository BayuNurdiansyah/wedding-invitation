export interface InvitationData {
  hero: HeroSection;
  events: EventSection[];
  gallery: GallerySection;
  theme: ThemeConfig;
  music?: MusicConfig;
}

export interface HeroSection {
  title: string;
  brideName: string;
  groomName: string;
  date: string;
  bgImage: string;
  subtitle?: string;
}

export interface EventSection {
  id: string;
  title: string;
  time: string;
  location: string;
  address: string;
  mapLink: string;
  description?: string;
}

export interface GallerySection {
  images: GalleryImage[];
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontStyle: 'elegant' | 'modern' | 'romantic';
}

export interface MusicConfig {
  url: string;
  title: string;
  artist: string;
  autoplay?: boolean;
}
