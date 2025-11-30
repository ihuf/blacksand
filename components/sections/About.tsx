'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { type Locale } from '@/i18n';
import { FadeIn } from '@/components/animations/FadeIn';

interface AboutProps {
  locale: Locale;
}

const cards = [
  {
    key: 'mission',
    image: 'https://blacksand.sa/assets/about/Image-1.png',
  },
  {
    key: 'vision',
    image: 'https://blacksand.sa/assets/about/Image-2.png',
  },
  {
    key: 'values',
    image: 'https://blacksand.sa/assets/about/Image.png',
  },
];

export function About({ locale }: AboutProps) {
  const t = useTranslations('about');

  return (
    <section className="section bg-black relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <FadeIn>
            <h2 className="text-heading-xl md:text-display-sm text-gray-500 font-normal mb-10">
              {t('title')}
            </h2>
          </FadeIn>
          
          {/* Subtitle Image - Decorative line from old site */}
          <FadeIn delay={0.1}>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent mb-20" />
          </FadeIn>
        </div>

        {/* Story Content */}
        <div className="mb-20">
          <FadeIn delay={0.2}>
            <p className="text-[28px] leading-[39px] text-white font-light max-w-4xl">
              {t('description')}
            </p>
          </FadeIn>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, index) => (
            <FadeIn key={card.key} delay={0.3 + index * 0.1}>
              <CardItem card={card} t={t} />
            </FadeIn>
          ))}
        </div>

        {/* What We Stand For Section */}
        <FadeIn delay={0.6}>
          <div className="mb-10">
            <h3 className="text-heading-xl text-white font-normal mb-12">
              What We Stand For
            </h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="relative w-full h-[622px] rounded-xl overflow-hidden">
            <Image
              src="https://blacksand.sa/assets/about/Frame%2041.png"
              alt="What We Stand For"
              fill
              className="object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute left-0 top-0 w-full md:w-[604px] h-full bg-white/90 flex items-center z-10">
              <div className="p-10 md:p-[51px]">
                <h3 className="text-[40px] font-semibold text-black mb-16">
                  {t('standFor.title')}
                </h3>
                <p className="text-[28px] text-gray-500 leading-[40px]">
                  {t('standFor.description')}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface CardItemProps {
  card: typeof cards[0];
  t: ReturnType<typeof useTranslations>;
}

function CardItem({ card, t }: CardItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[390px] overflow-hidden cursor-pointer"
    >
      {/* Card Image */}
      <div className="relative w-full h-full">
        <Image
          src={card.image}
          alt={t(`${card.key}.title`)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay with Title */}
        <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-purple/80 flex items-center justify-center transition-all duration-300 group-hover:h-full group-hover:bg-purple/90">
          <div className="text-center transition-all duration-300">
            <h3 className="text-white font-bold text-2xl mb-0 group-hover:mb-4">
              {t(`${card.key}.title`)}
            </h3>
            <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[200px] mx-auto">
              {t(`${card.key}.description`)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}