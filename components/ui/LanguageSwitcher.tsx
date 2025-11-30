'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type Locale, locales, localeConfig } from '@/i18n';

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale = locale === 'en' ? 'ar' : 'en';
  const otherLocaleConfig = localeConfig[otherLocale];

  const handleSwitch = () => {
    // Get the path without the current locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${otherLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-full',
        'bg-white/5 hover:bg-white/10 border border-white/10',
        'text-sm font-medium transition-all duration-300',
        isPending && 'opacity-50 cursor-wait',
        className
      )}
      aria-label={`Switch to ${otherLocaleConfig.name}`}
    >
      <GlobeIcon className="w-4 h-4 text-sand" />
      <span className="text-white/80">{otherLocaleConfig.nativeName}</span>
    </button>
  );
}

// Alternative dropdown version for more languages
export function LanguageSwitcherDropdown({ locale, className }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleSwitch = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

    startTransition(() => {
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-full',
          'bg-white/5 hover:bg-white/10 border border-white/10',
          'text-sm font-medium transition-all duration-300',
          isPending && 'opacity-50 cursor-wait'
        )}
      >
        <GlobeIcon className="w-4 h-4 text-sand" />
        <span className="text-white/80">{localeConfig[locale].nativeName}</span>
        <ChevronDownIcon
          className={cn(
            'w-4 h-4 text-white/50 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'absolute top-full mt-2 right-0 z-50',
                'min-w-[140px] py-2 rounded-xl',
                'bg-black-50 border border-white/10',
                'shadow-xl shadow-black/50'
              )}
            >
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleSwitch(loc)}
                  className={cn(
                    'w-full px-4 py-2 text-left text-sm',
                    'transition-colors duration-200',
                    loc === locale
                      ? 'text-sand bg-sand/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                >
                  {localeConfig[loc].nativeName}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Import useState for dropdown version
import { useState } from 'react';

// Icon Components
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}