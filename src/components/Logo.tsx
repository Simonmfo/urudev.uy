import React from 'react';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-8',
  showSubtitle = true,
  variant = 'light',
}) => {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* High-fidelity vector mark icon replicating urudev's brand */}
      <div className="relative w-8 h-8 rounded-lg bg-[#005ff9] flex items-center justify-center shadow-xs shrink-0 overflow-hidden">
        {/* Subtle top-left light sheen */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none" />
        
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
          className={`font-barlow text-[20px] font-bold tracking-tight ${
            variant === 'dark' ? 'text-white' : 'text-[#1c1b1b]'
          }`}
        >
          urudev<span className="text-[#005ff9]">.uy</span>
        </span>
        {showSubtitle && (
          <span
            className={`font-mono-tech text-[8px] font-semibold tracking-[0.22em] uppercase mt-0.5 ${
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
