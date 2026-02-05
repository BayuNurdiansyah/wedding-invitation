import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

// Load fonts using Next.js font optimization
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-elegant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-modern",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: "swap",

});

export const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pinyon',
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Join us in celebrating our special day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfairDisplay.variable} ${inter.variable} ${greatVibes.variable} ${cormorantGaramond.variable} ${pinyonScript.variable}`}>
      <body className={inter.className}>
        {/* Desktop Container - Centers content like mobile app */}
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
          <div className="mx-auto max-w-[390px] min-h-screen bg-white shadow-2xl relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}