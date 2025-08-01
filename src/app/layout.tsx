// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Palante Global',
  description: 'Palante Prestamos ofrece servicios financieros inclusivos para promover el desarrollo con préstamos automotrices, pymes, inmobiliarios y servicios conexos.',
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any' }, // ICO principal
      { url: '/logo.png', sizes: '16x16', type: 'image/png' }, // Opcional: agrega PNGs en public/ para mejor compatibilidad
    ],
    apple: '/apple-touch-icon.png', // Opcional para iOS
  },
  // SEO adicional
  openGraph: {
    title: 'Palante Global',
    description: 'Servicios financieros inclusivos con préstamos automotrices, pymes e inmobiliarios.',
    url: 'https://tudominio.com', // Reemplaza con tu URL real
    siteName: 'Palante Global',
    images: [
      {
        url: '/favicon.svg', // Agrega una imagen en public/ para OpenGraph
        width: 1200,
        height: 630,
        alt: 'Palante Global',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Palante Global',
    description: 'Préstamos inclusivos para tu desarrollo.',
    images: ['/favicon.svg'], // Agrega en public/
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}