'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export function Logo({ className, variant = 'full' }: LogoProps) {
  return (
    <div className={cn('flex items-center', className)}>
      {/* Blacksand Logo Image */}
      <Image
        src="https://blacksand.sa/logo4.png"
        alt="Blacksand"
        width={174}
        height={40}
        className="h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}

// Alternative text-based logo for better SEO and flexibility
export function LogoText({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="w-10 h-10 rounded-lg bg-purple flex items-center justify-center">
        <span className="text-white font-bold text-xl">B</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-white font-bold text-lg tracking-wider">BLACK</span>
        <span className="text-purple font-bold text-lg tracking-wider">SAND</span>
      </div>
    </div>
  );
}