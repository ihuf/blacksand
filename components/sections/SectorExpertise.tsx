'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { type Locale } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';

interface SectorExpertiseProps {
  locale: Locale;
}

const sectors = [
  {
    key: 'residential',
    percentage: '39%',
    icon: ResidentialIcon,
  },
  {
    key: 'commercial',
    percentage: '17%',
    icon: CommercialIcon,
  },
  {
    key: 'hospitality',
    percentage: '15%',
    icon: HospitalityIcon,
  },
  {
    key: 'mixedUse',
    percentage: '15%',
    icon: MixedUseIcon,
  },
  {
    key: 'logistics',
    percentage: '14%',
    icon: LogisticsIcon,
  },
];

export function SectorExpertise({ locale }: SectorExpertiseProps) {
  const t = useTranslations('sectorExpertise');

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Title */}
        <FadeIn>
          <h3 className="text-heading-lg text-gray-500 font-normal mb-12">
            {t('title')}
          </h3>
        </FadeIn>

        {/* Stats Grid */}
        <div className="flex flex-wrap items-center justify-between gap-0 max-w-5xl mx-auto mb-12">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 min-w-[120px] text-center relative"
            >
              {/* Divider */}
              {index > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[180px] bg-gray-300/30" />
              )}
              
              <div className="flex flex-col items-center py-4">
                {/* Icon */}
                <div className="w-10 h-10 mb-6 flex items-center justify-center">
                  <sector.icon className="w-10 h-10 text-gray-500" />
                </div>
                
                {/* Percentage */}
                <div className="text-5xl text-gray-500 font-light leading-none mb-2">
                  {sector.percentage}
                </div>
                
                {/* Label */}
                <div className="text-lg text-gray-500">
                  {t(sector.key)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.6}>
          <div className="text-center">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-full text-purple text-sm hover:bg-purple hover:text-white hover:border-purple transition-all duration-300"
            >
              {t('learnMore')}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// Sector Icons
function ResidentialIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function CommercialIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function HospitalityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
    </svg>
  );
}

function MixedUseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}

function LogisticsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );
}