import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/whatsapp-button';

// Using Plus Jakarta Sans for that premium "Curved" branding look we established
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Chessmatic | Premier Adult Chess Academy | Singapore',
    template: '%s | Chessmatic Strategic Lab',
  },
  description:
    'Singapore’s premier chess academy combining adult chess coaching, master-level tactics, structured progression, and strategic corporate workshops.',
  keywords: [
    'Chessmatic',
    'Adult Chess Singapore',
    'Chess Coaching Singapore',
    'Adult Chess Classes Singapore',
    'Corporate Workshops Singapore',
    'Strategic Thinking Workshop',
    'Cognitive Performance',
    'Executive Coaching Singapore',
    'Cognitive Training',
    'Team Building Singapore',
    'Wagish Chessmatic',
  ],
  metadataBase: new URL('https://www.chessmatic.sg'), // Update to your actual domain
  alternates: {
    canonical: 'https://www.chessmatic.sg',
  },
  authors: [{ name: 'Wagish', url: 'https://www.chessmatic.sg' }],
  creator: 'Chessmatic',
  publisher: 'Chessmatic',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Chessmatic - Strategic Adult Chess Academy',
    description: 'Master strategic logic, tactical calculation, and tournament-grade chess in Singapore’s premier adult academy.',
    url: 'https://www.chessmatic.sg',
    siteName: 'Chessmatic',
    images: [
      {
        url: 'https://www.chessmatic.sg/og-image.jpg', // Ensure you have an OG image in public
        width: 1200,
        height: 630,
        alt: 'Chessmatic Strategic Lab Singapore',
      },
    ],
    locale: 'en_SG',
    type: 'website',
  },
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="theme-color" content="#1a365d" /> {/* Brand Navy */}

        {/* JSON-LD Structured Data for Chessmatic */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'EducationalOrganization',
                name: 'Chessmatic',
                url: 'https://www.chessmatic.sg',
                logo: 'https://www.chessmatic.sg/logo.jpg',
                description: 'A premier adult chess academy in Singapore combining strategic logic, tactical mastery, and cognitive performance.',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Woodlands Studio', // Update with actual full address
                  addressLocality: 'Woodlands',
                  addressRegion: 'Singapore',
                  postalCode: 'XXXXXX',
                  addressCountry: 'SG',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+65-8580-5046',
                  contactType: 'customer service',
                  email: 'info@chessmatic.com',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Wagish',
                jobTitle: 'Founder',
                affiliation: {
                  '@type': 'Organization',
                  name: 'Chessmatic',
                },
                sameAs: [
                  'https://www.linkedin.com/in/wagish-chessmatic', // Update with actual links
                ],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'What training tracks are offered?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We provide structured adult chess tracks: Beginner Fundamentals, Intermediate Positional Strategy, Advanced Tactical Mastery, and Corporate Strategy Workshops.'
                    }
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Chessmatic offer corporate team building and workshops?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Chessmatic provides tailored corporate workshops, group coaching, private sessions, and strategic team-building experiences for startups and enterprises.'
                    }
                  }
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={`${jakarta.className} bg-white text-[#1a365d] antialiased`}>
        <Navbar />
        {children}
        <Footer/>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}