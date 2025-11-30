import { type Locale } from '@/i18n';
import { Hero } from '@/components/sections/Hero';
import { FeaturedProperties } from '@/components/sections/FeaturedProperties';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { SectorExpertise } from '@/components/sections/SectorExpertise';
import { CTA } from '@/components/sections/CTA';

interface HomePageProps {
  params: {
    locale: Locale;
  };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <Hero locale={locale} />

      {/* Introduction & Projects Section */}
      <FeaturedProperties locale={locale} />

      {/* About / Our Story Section */}
      <About locale={locale} />

      {/* What We Do - Services Section */}
      <Services locale={locale} />

      {/* Sector Expertise Stats */}
      <SectorExpertise locale={locale} />

      {/* CTA Section */}
      <CTA locale={locale} />
    </>
  );
}