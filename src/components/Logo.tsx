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
      svg: 'w-4.5 h-4.5',
      title: 'text-[17px]',
      subtitle: 'text-[7px]',
      gap: 'gap-2.5',
    },
    md: {
      box: 'w-9 h-9 rounded-xl',
      svg: 'w-5.5 h-5.5',
      title: 'text-[21px]',
      subtitle: 'text-[8.5px]',
      gap: 'gap-3',
    },
    lg: {
      box: 'w-12 h-12 rounded-2xl shadow-lg',
      svg: 'w-7 h-7',
      title: 'text-[28px]',
      subtitle: 'text-[10px]',
      gap: 'gap-3.5',
    },
    xl: {
      box: 'w-16 h-16 rounded-2xl shadow-xl shadow-[#005ff9]/20',
      svg: 'w-10 h-10',
      title: 'text-[36px] sm:text-[44px]',
      subtitle: 'text-[11px] sm:text-[12px]',
      gap: 'gap-4 sm:gap-5',
    },
  }[size];

  return (
    <div className={`flex items-center select-none ${sizeStyles.gap} ${className}`}>
      {/* Terminal Minimalist Monogram (>_) */}
      <div
        className={`relative ${sizeStyles.box} bg-gradient-to-b from-[#11192e] to-[#070a14] border border-[#005ff9]/40 flex items-center justify-center shrink-0 overflow-hidden shadow-md group transition-all duration-300 hover:border-[#005ff9] hover:shadow-[#005ff9]/30 hover:scale-105`}
      >
        {/* Subtle top-edge light reflection */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
        <div className="absolute -top-3 inset-x-0 h-4 bg-[#005ff9]/35 blur-xs rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeStyles.svg}
        >
          <defs>
            <linearGradient id="chevronGrad" x1="10" y1="13" x2="20" y2="27" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#005ff9" />
            </linearGradient>
            <linearGradient id="cursorGrad" x1="22" y1="27" x2="30" y2="27" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00e599" />
              <stop offset="100%" stopColor="#3fd5ae" />
            </linearGradient>
          </defs>

          {/* Terminal Prompt Chevron '>' */}
          <path
            d="M11 13L19.5 20L11 27"
            stroke="url(#chevronGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Terminal Command Cursor '_' */}
          <path
            d="M22.5 27H30"
            stroke="url(#cursorGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
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
