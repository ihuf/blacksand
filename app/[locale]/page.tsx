import { type Locale } from '@/i18n';
import { Hero } from '@/components/sections/Hero';
import { FeaturedProperties } from '@/components/sections/FeaturedProperties';
import { Services } from '@/components/sections/Services';
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

      {/* Featured Properties */}
      <FeaturedProperties locale={locale} />

      {/* Services Section */}
      <Services locale={locale} />

      {/* CTA Section */}
      <CTA locale={locale} />
    </>
  );
}