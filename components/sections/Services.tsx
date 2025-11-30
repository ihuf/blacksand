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
    key: 'masterPlanning',
    icon: MasterPlanningIcon,
  },
  {
    key: 'feasibility',
    icon: FeasibilityIcon,
  },
  {
    key: 'construction',
    icon: ConstructionIcon,
  },
  {
    key: 'sales',
    icon: SalesIcon,
  },
  {
    key: 'management',
    icon: ManagementIcon,
  },
];

export function Services({ locale }: ServicesProps) {
  const t = useTranslations('services');

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238E61A5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <FadeIn>
            <h2 className="text-heading-xl md:text-display-sm text-gray-500 font-normal mb-4">
              {t('title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3 className="section-title text-white">{t('subtitle')}</h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="section-subtitle max-w-3xl">{t('description')}</p>
          </FadeIn>
        </div>

        {/* Services Row - Horizontal layout like old site */}
        <div className="flex flex-wrap items-start gap-0">
          {/* Our Services Label */}
          <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
            <FadeIn>
              <h4 className="text-heading-lg text-white font-normal">Our Services</h4>
            </FadeIn>
          </div>
          
          {/* Services Grid */}
          <div className="w-full lg:w-5/6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
              {services.map((service, index) => (
                <ServiceItem
                  key={service.key}
                  service={service}
                  t={t}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  service: typeof services[0];
  t: ReturnType<typeof useTranslations>;
  index: number;
}

function ServiceItem({ service, t, index }: ServiceItemProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border-l border-gray-500/30 pl-4 py-4 first:border-l-0 first:pl-0"
    >
      <div className="flex flex-col items-center text-center h-full">
        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center mb-6">
          <Icon className="w-10 h-10 text-purple" />
        </div>

        {/* Title */}
        <h4 className="text-white font-normal text-body-md leading-tight">
          {t(`${service.key}.title`)}
        </h4>
      </div>
    </motion.div>
  );
}

// Service Icons - Based on Blacksand's icons
function MasterPlanningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  );
}

function FeasibilityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function ConstructionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function SalesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function ManagementIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}