'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type Locale } from '@/i18n';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

interface FeaturedPropertiesProps {
  locale: Locale;
}

// Blacksand Projects Data
const projects = [
  {
    id: '1',
    slug: 'the-business-address',
    titleKey: 'businessAddress',
    image: 'https://blacksand.sa/uploads/0a3073cc-fd1a-4732-9a06-c84802c39706.webp',
  },
  {
    id: '2',
    slug: 'town-center',
    titleKey: 'townCenter',
    image: 'https://blacksand.sa/uploads/0411f81e-3554-4dc9-b73c-4108c8ca68da.webp',
  },
  {
    id: '3',
    slug: 'american-express-hq',
    titleKey: 'americanExpress',
    image: 'https://blacksand.sa/uploads/6040a955-5ecf-4b2a-a7a9-73fe31ed889e.webp',
  },
  {
    id: '4',
    slug: 'residential-communities',
    titleKey: 'residentialCommunities',
    image: 'https://blacksand.sa/uploads/581a7e3d-affa-4f21-bd32-abb89f36f18a.webp',
  },
];

export function FeaturedProperties({ locale }: FeaturedPropertiesProps) {
  const t = useTranslations('featured');
  const tProjects = useTranslations('projects.items');

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <FadeIn>
            <p className="text-body-lg text-gray-500 max-w-3xl mb-8">
              Discover BLACKSAND — a real estate partner driven by integrity, innovation, and enduring value.
            </p>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <ProjectCard
                project={project}
                locale={locale}
                tProjects={tProjects}
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <FadeIn delay={0.6} className="text-center">
          <Link
            href={`/${locale}/projects`}
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            <span>{t('viewAll')}</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  locale: Locale;
  tProjects: ReturnType<typeof useTranslations>;
  index: number;
}

function ProjectCard({ project, locale, tProjects, index }: ProjectCardProps) {
  const title = tProjects(`${project.titleKey}.title`);
  const location = tProjects(`${project.titleKey}.location`);
  const description = tProjects(`${project.titleKey}.description`);

  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group block"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        {/* Image */}
        <div className="relative h-[422px] overflow-hidden mb-6">
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 z-10" />
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* View Project Overlay */}
          <div className="absolute bottom-0 right-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-white p-5 flex flex-col items-start gap-3 min-w-[140px] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-3xl text-purple leading-none">+</span>
              <span className="text-purple text-sm">View</span>
              <span className="text-purple text-sm">Project</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-white font-normal text-[28px] mb-2 group-hover:text-purple transition-colors">
            {title}
          </h3>
          
          {/* Location */}
          <p className="text-gray-500 text-sm mb-4">
            {location}
          </p>

          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}