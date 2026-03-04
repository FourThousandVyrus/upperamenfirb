import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import { TransitionProvider } from './components/RouteTransition/TransitionContext';
import RouteTransition from './components/RouteTransition/RouteTransition';

// Optimized font loading — no render-blocking CSS @import
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-outfit',
});

const siteUrl = 'https://upperamenfirb.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Upper Amenfi Rural Bank PLC | Modern Rural Banking in Ghana',
    template: '%s | Upper Amenfi Rural Bank PLC',
  },
  description:
    'Upper Amenfi Rural Bank PLC — 37+ years of trusted banking. Savings, loans, Susu, and digital banking across 18 branches in the Western, Western North, Central, Eastern, and Ashanti Regions of Ghana.',
  keywords: [
    'Upper Amenfi Rural Bank',
    'UARB',
    'rural bank Ghana',
    'savings account Ghana',
    'loans Ghana',
    'microfinance Ghana',
    'Asankrangwa bank',
    'Susu savings',
    'fixed deposit Ghana',
    'Bank of Ghana licensed',
    'rural banking Western Region',
    'mobile banking Ghana',
    'USSD banking',
    'community banking',
    'agricultural loans Ghana',
    'salary loans Ghana',
    'Ghana Deposit Protection',
  ],
  authors: [{ name: 'Upper Amenfi Rural Bank PLC' }],
  creator: 'Upper Amenfi Rural Bank PLC',
  publisher: 'Upper Amenfi Rural Bank PLC',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: siteUrl,
    siteName: 'Upper Amenfi Rural Bank PLC',
    title: 'Upper Amenfi Rural Bank PLC | Modern Rural Banking in Ghana',
    description:
      '37+ years of trusted banking. Savings, loans, Susu, and digital banking across 18 branches in Ghana.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Upper Amenfi Rural Bank — Modern Rural Banking in Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upper Amenfi Rural Bank PLC',
    description:
      '37+ years of trusted banking. Savings, loans, and digital banking across 18 branches in Ghana.',
    images: ['/opengraph-image'],
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
    // Add your verification tokens when available
    // google: 'your-google-verification-code',
  },
  category: 'finance',
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BankOrCreditUnion',
  name: 'Upper Amenfi Rural Bank PLC',
  alternateName: 'UARB',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Upper Amenfi Rural Bank PLC is a Bank of Ghana-licensed rural bank established in 1988, providing savings, loans, Susu, and digital banking services across 18 branches in Ghana.',
  foundingDate: '1988',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 478,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ankwaso, Wassa Amenfi',
    addressLocality: 'Asankrangwa',
    addressRegion: 'Western Region',
    addressCountry: 'GH',
    postalCode: 'P.O. Box 399, Dunkwa-on-Offin',
  },
  telephone: ['+233533519373', '+233312091556'],
  email: 'info@uarb.com.gh',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Western Region, Ghana' },
    { '@type': 'AdministrativeArea', name: 'Western North Region, Ghana' },
    { '@type': 'AdministrativeArea', name: 'Central Region, Ghana' },
    { '@type': 'AdministrativeArea', name: 'Eastern Region, Ghana' },
    { '@type': 'AdministrativeArea', name: 'Ashanti Region, Ghana' },
  ],
  sameAs: [
    'https://www.facebook.com/upperamenfirb',
    'https://twitter.com/upperamenfirb',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Banking Products',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Normal Savings Account' } },
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Susu Savings Account' } },
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Fixed Deposit Account' } },
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Current Account' } },
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Salary Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'Commercial Loans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'FinancialProduct', name: 'USSD Mobile Banking' } },
    ],
  },
  memberOf: {
    '@type': 'Organization',
    name: 'ARB Apex Bank Limited',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <TransitionProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <AnnouncementBar />
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
          <CookieConsent />
          <RouteTransition />
        </TransitionProvider>
      </body>
    </html>
  );
}
