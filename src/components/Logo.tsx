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
      box: 'w-7 h-7 rounded-md',
      svg: 'w-5 h-5',
      title: 'text-[17px]',
      subtitle: 'text-[7px]',
      gap: 'gap-2.5',
    },
    md: {
      box: 'w-8 h-8 rounded-lg',
      svg: 'w-6 h-6',
      title: 'text-[20px]',
      subtitle: 'text-[8px]',
      gap: 'gap-3.5',
    },
    lg: {
      box: 'w-11 h-11 rounded-xl shadow-md',
      svg: 'w-8 h-8',
      title: 'text-[28px]',
      subtitle: 'text-[10px]',
      gap: 'gap-4',
    },
    xl: {
      box: 'w-14 h-14 rounded-2xl shadow-xl shadow-[#005ff9]/25 ring-1 ring-[#005ff9]/30',
      svg: 'w-10 h-10',
      title: 'text-[36px] sm:text-[42px]',
      subtitle: 'text-[11px] sm:text-[12px]',
      gap: 'gap-4 sm:gap-5',
    },
  }[size];

  return (
    <div className={`flex items-center select-none ${sizeStyles.gap} ${className}`}>
      {/* High-fidelity vector mark icon replicating urudev's brand */}
      <div
        className={`relative ${sizeStyles.box} bg-[#005ff9] flex items-center justify-center shrink-0 overflow-hidden transition-transform duration-300 hover:scale-105`}
      >
        {/* Subtle top-left light sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/20 pointer-events-none" />

        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={sizeStyles.svg}
        >
          {/* U shape in crisp white */}
          <path
            d="M9 10V21C9 25.4 12.6 28 17 28C21.4 28 25 25.4 25 21V10"
            stroke="white"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Green chevron accent on right branch */}
          <path
            d="M21 14L24 10.5L27 14"
            stroke="#3fd5ae"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mint dot */}
          <circle cx="26" cy="23.5" r="2.2" fill="#3fd5ae" />
        </svg>
      </div>

      {/* Typography */}
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
