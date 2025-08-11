import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuickCourt - Premium Sports Facility Booking Platform',
  description: 'Book premium sports facilities instantly. Find courts, fields, and venues for badminton, tennis, football, basketball and more. Trusted by millions of players worldwide.',
  keywords: 'sports booking, court booking, facility booking, badminton, tennis, football, basketball, sports venues',
  authors: [{ name: 'QuickCourt Team' }],
  creator: 'QuickCourt',
  publisher: 'QuickCourt',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quickcourt.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'QuickCourt - Premium Sports Facility Booking Platform',
    description: 'Book premium sports facilities instantly. Trusted by millions of players worldwide.',
    url: 'https://quickcourt.com',
    siteName: 'QuickCourt',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QuickCourt - Sports Facility Booking',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickCourt - Premium Sports Facility Booking Platform',
    description: 'Book premium sports facilities instantly. Trusted by millions of players worldwide.',
    images: ['/og-image.jpg'],
    creator: '@quickcourt',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}