import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showSubtitle = true,
  variant = 'light',
  size = 'md',
}) => {
  const sizeStyles = {
    sm: {
      box: 'w-7 h-7 rounded-lg',
      svg: 'w-5 h-5',
      title: 'text-[17px]',
      subtitle: 'text-[7px]',
      gap: 'gap-2.5',
    },
    md: {
      box: 'w-9 h-9 rounded-xl',
      svg: 'w-6 h-6',
      title: 'text-[21px]',
      subtitle: 'text-[8.5px]',
      gap: 'gap-3',
    },
    lg: {
      box: 'w-12 h-12 rounded-2xl shadow-lg',
      svg: 'w-8 h-8',
      title: 'text-[28px]',
      subtitle: 'text-[10px]',
      gap: 'gap-4',
    },
    xl: {
      box: 'w-16 h-16 rounded-2xl shadow-xl shadow-[#005ff9]/20',
      svg: 'w-11 h-11',
      title: 'text-[36px] sm:text-[44px]',
      subtitle: 'text-[11px] sm:text-[12px]',
      gap: 'gap-4 sm:gap-5',
    },
  }[size];

  return (
    <div className={`flex items-center select-none ${sizeStyles.gap} ${className}`}>
      {/* Developer Monogram Emblem: Code Brackets & Slash fused into 'U' */}
      <div
        className={`relative ${sizeStyles.box} bg-gradient-to-b from-[#11192e] to-[#070a14] border border-[#005ff9]/40 flex items-center justify-center shrink-0 overflow-hidden shadow-md group transition-all duration-300 hover:border-[#005ff9] hover:shadow-[#005ff9]/25 hover:scale-105`}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-3 inset-x-0 h-4 bg-[#005ff9]/30 blur-xs rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeStyles.svg}
        >
          <defs>
            {/* Gradient for the U Code Brackets */}
            <linearGradient id="uCodeBracketGrad" x1="6" y1="8" x2="34" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#005ff9" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#3fd5ae" />
            </linearGradient>

            {/* Gradient for the Slash */}
            <linearGradient id="slashGrad" x1="16" y1="26" x2="24" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#005ff9" />
              <stop offset="100%" stopColor="#3fd5ae" />
            </linearGradient>
          </defs>

          {/* Left code bracket '<' curving through base to right code bracket '>' forming the 'U' */}
          <path
            d="M11 9L6 17L11 24C13.2 28.5 16.5 31.5 20 31.5C23.5 31.5 26.8 28.5 29 24L34 17L29 9"
            stroke="url(#uCodeBracketGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Developer Forward Slash in Center */}
          <path
            d="M16.5 25.5L23.5 11"
            stroke="url(#slashGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Terminal Pulse Dot */}
          <circle cx="26.5" cy="22" r="1.8" fill="#3fd5ae" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-barlow font-bold tracking-tight ${sizeStyles.title} ${
            variant === 'dark' ? 'text-white' : 'text-[#1c1b1b]'
          }`}
        >
          urudev<span className="text-[#005ff9]">.uy</span>
        </span>
        {showSubtitle && (
          <span
            className={`font-mono-tech font-semibold tracking-[0.24em] uppercase mt-1 ${sizeStyles.subtitle} ${
              variant === 'dark' ? 'text-zinc-400' : 'text-[#737687]'
            }`}
          >
            SOFTWARE ENGINEERING
          </span>
        )}
      </div>
    </div>
  );
};
