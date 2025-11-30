'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type Locale } from '@/i18n';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

interface ServicesProps {
  locale: Locale;
}

const services = [
  {
    key: 'buying',
    icon: HomeIcon,
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    key: 'selling',
    icon: TagIcon,
    color: 'from-green-500/20 to-green-600/20',
  },
  {
    key: 'investment',
    icon: ChartIcon,
    color: 'from-purple-500/20 to-purple-600/20',
  },
  {
    key: 'management',
    icon: BuildingIcon,
    color: 'from-orange-500/20 to-orange-600/20',
  },
];

export function Services({ locale }: ServicesProps) {
  const t = useTranslations('services');

  return (
    <section className="section bg-black-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <span className="inline-block px-4 py-2 rounded-full bg-sand/10 text-sand text-sm font-medium mb-4">
              What We Offer
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-title text-white">{t('title')}</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-subtitle mx-auto">{t('subtitle')}</p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={service.key}>
              <ServiceCard
                service={service}
                t={t}
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  t: ReturnType<typeof useTranslations>;
  index: number;
}

function ServiceCard({ service, t, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="card p-8 h-full relative overflow-hidden">
        {/* Gradient Background on Hover */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
            service.color
          )}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-sand/10 flex items-center justify-center mb-6 group-hover:bg-sand/20 transition-colors duration-300">
            <Icon className="w-7 h-7 text-sand" />
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-sand transition-colors duration-300">
            {t(`${service.key}.title`)}
          </h3>

          {/* Description */}
          <p className="text-neutral-gray text-sm leading-relaxed">
            {t(`${service.key}.description`)}
          </p>

          {/* Arrow */}
          <div className="mt-6 flex items-center gap-2 text-sand opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-medium">Learn More</span>
            <ArrowIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-sand/5 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

// Icons
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}