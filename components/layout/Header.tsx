'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type Locale, localeConfig } from '@/i18n';
import { Logo } from '@/components/ui/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

interface HeaderProps {
  locale: Locale;
}

const navItems = [
  { href: '/', key: 'home' },
  { href: '/properties', key: 'properties' },
  { href: '/about', key: 'about' },
  { href: '/team', key: 'team' },
  { href: '/blog', key: 'blog' },
  { href: '/contact', key: 'contact' },
];

export function Header({ locale }: HeaderProps) {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dir } = localeConfig[locale];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname.startsWith(`/${locale}${href}`);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href={`/${locale}`} className="relative z-10">
              <Logo className="h-10 md:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href === '/' ? '' : item.href}`}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    isActive(item.href)
                      ? 'text-sand bg-sand/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <LanguageSwitcher locale={locale} />

              {/* CTA Button - Desktop */}
              <Link
                href={`/${locale}/contact`}
                className="hidden md:inline-flex btn-primary text-sm"
              >
                {t('contact')}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-10 p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 8 : 0,
                    }}
                    className="block h-0.5 w-full bg-white origin-left"
                  />
                  <motion.span
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1,
                      x: isMobileMenuOpen ? -10 : 0,
                    }}
                    className="block h-0.5 w-full bg-white"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -8 : 0,
                    }}
                    className="block h-0.5 w-full bg-white origin-left"
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: dir === 'rtl' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: dir === 'rtl' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={cn(
                'absolute top-0 bottom-0 w-[80%] max-w-sm bg-black-50 p-8 pt-24',
                dir === 'rtl' ? 'left-0' : 'right-0'
              )}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={`/${locale}${item.href === '/' ? '' : item.href}`}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300',
                        isActive(item.href)
                          ? 'text-sand bg-sand/10'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href={`/${locale}/contact`}
                  className="btn-primary w-full text-center"
                >
                  {t('contact')}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}