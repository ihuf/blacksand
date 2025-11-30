import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, localeConfig, type Locale } from '@/i18n';
import '@/app/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SmoothScroll } from '@/components/providers/SmoothScroll';

// English fonts
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Arabic font - IBM Plex Sans Arabic
const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: RootLayoutProps) {
  const messages = await getMessages();
  const metadata = messages.metadata as { title: string; description: string };

  return {
    title: {
      default: metadata?.title || 'Black Sand | Premium Real Estate',
      template: '%s | Black Sand',
    },
    description: metadata?.description || 'Premium real estate in Saudi Arabia',
    keywords: [
      'real estate',
      'Saudi Arabia',
      'luxury properties',
      'villas',
      'apartments',
      'Black Sand',
      'عقارات',
      'السعودية',
    ],
    authors: [{ name: 'Black Sand' }],
    creator: 'Black Sand',
    openGraph: {
      type: 'website',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      url: 'https://blacksand.sa',
      siteName: 'Black Sand',
      title: metadata?.title || 'Black Sand | Premium Real Estate',
      description: metadata?.description || 'Premium real estate in Saudi Arabia',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata?.title || 'Black Sand | Premium Real Estate',
      description: metadata?.description || 'Premium real estate in Saudi Arabia',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Get locale config for direction
  const { dir } = localeConfig[locale as Locale];

  // Get messages for translations
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakarta.variable} ${inter.variable} ${ibmPlexArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <SmoothScroll>
            <Header locale={locale as Locale} />
            <main className="flex-1">{children}</main>
            <Footer locale={locale as Locale} />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}