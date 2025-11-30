'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export function Logo({ className, variant = 'full' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <svg
        className={cn('text-sand', className)}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="currentColor" />
        <path
          d="M12 28V12h6.5c1.5 0 2.7.4 3.6 1.2.9.8 1.4 1.9 1.4 3.3 0 1-.3 1.8-.8 2.5-.5.7-1.2 1.2-2.1 1.5v.1c1.1.2 2 .7 2.6 1.4.7.8 1 1.7 1 2.8 0 1.6-.5 2.8-1.6 3.7-1 .9-2.4 1.4-4.2 1.4H12zm3.5-9.2h2.8c.9 0 1.6-.2 2-.6.5-.4.7-1 .7-1.7 0-.7-.2-1.3-.7-1.7-.4-.4-1.1-.6-2-.6h-2.8v4.6zm0 6.5h3.2c1 0 1.7-.2 2.2-.7.5-.4.8-1 .8-1.8 0-.8-.3-1.4-.8-1.9-.5-.4-1.3-.6-2.2-.6h-3.2v5z"
          fill="#0A0A0A"
        />
        <path
          d="M26 18.5c0-.8.3-1.5.8-2 .5-.5 1.2-.8 2-.8.8 0 1.5.3 2 .8.5.5.8 1.2.8 2v1c0 .8-.3 1.5-.8 2-.5.5-1.2.8-2 .8-.8 0-1.5-.3-2-.8-.5-.5-.8-1.2-.8-2v-1z"
          fill="#0A0A0A"
        />
      </svg>
    );
  }

  return (
    <svg
      className={cn('text-white', className)}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon */}
      <rect width="40" height="40" rx="8" className="fill-sand" />
      <path
        d="M12 28V12h6.5c1.5 0 2.7.4 3.6 1.2.9.8 1.4 1.9 1.4 3.3 0 1-.3 1.8-.8 2.5-.5.7-1.2 1.2-2.1 1.5v.1c1.1.2 2 .7 2.6 1.4.7.8 1 1.7 1 2.8 0 1.6-.5 2.8-1.6 3.7-1 .9-2.4 1.4-4.2 1.4H12zm3.5-9.2h2.8c.9 0 1.6-.2 2-.6.5-.4.7-1 .7-1.7 0-.7-.2-1.3-.7-1.7-.4-.4-1.1-.6-2-.6h-2.8v4.6zm0 6.5h3.2c1 0 1.7-.2 2.2-.7.5-.4.8-1 .8-1.8 0-.8-.3-1.4-.8-1.9-.5-.4-1.3-.6-2.2-.6h-3.2v5z"
        fill="#0A0A0A"
      />
      
      {/* Text: BLACK SAND */}
      <text
        x="52"
        y="26"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        BLACK
      </text>
      <text
        x="108"
        y="26"
        className="fill-sand"
        fontFamily="system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        SAND
      </text>
    </svg>
  );
}

// Alternative text-based logo for better SEO and flexibility
export function LogoText({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="w-10 h-10 rounded-lg bg-sand flex items-center justify-center">
        <span className="text-black font-bold text-xl">B</span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="text-white font-bold text-lg tracking-wider">BLACK</span>
        <span className="text-sand font-bold text-lg tracking-wider">SAND</span>
      </div>
    </div>
  );
}