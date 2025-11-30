'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type Locale } from '@/i18n';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

interface FeaturedPropertiesProps {
  locale: Locale;
}

// Mock data - will be replaced with Sanity data
const mockProperties = [
  {
    id: '1',
    slug: 'luxury-villa-riyadh',
    title: 'Luxury Villa in Al-Malqa',
    titleAr: 'فيلا فاخرة في الملقا',
    price: 5500000,
    location: 'Riyadh',
    locationAr: 'الرياض',
    bedrooms: 6,
    bathrooms: 7,
    size: 850,
    image: '/images/properties/property-1.jpg',
    type: 'villa',
  },
  {
    id: '2',
    slug: 'modern-apartment-jeddah',
    title: 'Modern Apartment in Corniche',
    titleAr: 'شقة عصرية في الكورنيش',
    price: 2800000,
    location: 'Jeddah',
    locationAr: 'جدة',
    bedrooms: 3,
    bathrooms: 3,
    size: 280,
    image: '/images/properties/property-2.jpg',
    type: 'apartment',
  },
  {
    id: '3',
    slug: 'penthouse-dammam',
    title: 'Exclusive Penthouse',
    titleAr: 'بنتهاوس حصري',
    price: 4200000,
    location: 'Dammam',
    locationAr: 'الدمام',
    bedrooms: 4,
    bathrooms: 5,
    size: 420,
    image: '/images/properties/property-3.jpg',
    type: 'apartment',
  },
  {
    id: '4',
    slug: 'commercial-building-riyadh',
    title: 'Commercial Tower',
    titleAr: 'برج تجاري',
    price: 25000000,
    location: 'Riyadh',
    locationAr: 'الرياض',
    bedrooms: 0,
    bathrooms: 20,
    size: 5000,
    image: '/images/properties/property-4.jpg',
    type: 'commercial',
  },
];

export function FeaturedProperties({ locale }: FeaturedPropertiesProps) {
  const t = useTranslations('featured');
  const tCard = useTranslations('properties.card');
  const containerRef = useRef<HTMLDivElement>(null);
  const isArabic = locale === 'ar';

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(isArabic ? 'ar-SA' : 'en-SA', {
      style: 'currency',
      currency: 'SAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sand/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-2 rounded-full bg-sand/10 text-sand text-sm font-medium mb-4">
              {t('title')}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title text-white">{t('title')}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-subtitle mx-auto">{t('subtitle')}</p>
          </FadeIn>
        </div>

        {/* Properties Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProperties.map((property, index) => (
            <StaggerItem key={property.id}>
              <PropertyCard
                property={property}
                locale={locale}
                formatPrice={formatPrice}
                tCard={tCard}
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <FadeIn delay={0.6} className="text-center mt-12">
          <Link
            href={`/${locale}/properties`}
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <span>{t('viewAll')}</span>
            <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  property: typeof mockProperties[0];
  locale: Locale;
  formatPrice: (price: number) => string;
  tCard: ReturnType<typeof useTranslations>;
  index: number;
}

function PropertyCard({ property, locale, formatPrice, tCard, index }: PropertyCardProps) {
  const isArabic = locale === 'ar';
  const title = isArabic ? property.titleAr : property.title;
  const location = isArabic ? property.locationAr : property.location;

  return (
    <Link
      href={`/${locale}/properties/${property.slug}`}
      className="group block"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="card card-hover h-full"
      >
        {/* Image */}
        <div className="relative aspect-property overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <Image
            src={property.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Property Type Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 rounded-full bg-sand/90 text-black text-xs font-medium capitalize">
              {property.type}
            </span>
          </div>

          {/* Price */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <p className="text-white font-bold text-xl">{formatPrice(property.price)}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-1 group-hover:text-sand transition-colors">
            {title}
          </h3>
          
          {/* Location */}
          <div className="flex items-center gap-2 text-neutral-gray text-sm mb-4">
            <MapPinIcon className="w-4 h-4 text-sand" />
            <span>{location}</span>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-sm text-neutral-gray">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <BedIcon className="w-4 h-4" />
                <span>{property.bedrooms} {tCard('bedrooms')}</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1">
                <BathIcon className="w-4 h-4" />
                <span>{property.bathrooms} {tCard('bathrooms')}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <SizeIcon className="w-4 h-4" />
              <span>{property.size} {tCard('size')}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// Icons
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function BathIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  );
}

function SizeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  );
}