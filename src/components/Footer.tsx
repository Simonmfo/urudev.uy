import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#f6f3f2] border-t border-[#e5e2e1]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Column: Brand & Location */}
        <div className="flex flex-col gap-2 max-w-md">
          <div className="flex items-center gap-3">
            <span className="font-barlow text-[20px] font-bold tracking-tight text-[#1c1b1b]">
              urudev<span className="text-[#005ff9]">.uy</span>
            </span>
            <span className="font-mono-tech text-[12px] text-[#424656] bg-[#f0edec] border border-[#c2c6d8]/60 px-2 py-0.5 rounded font-medium">
              PAYSANDÚ • UY
            </span>
          </div>
          <p className="font-barlow text-[14px] text-[#424656] leading-relaxed">
            Paysandú, Uruguay. Ingeniería de Software de Alta Fiabilidad.
          </p>
          <div className="flex items-center gap-3 text-[12px] font-mono-tech text-[#737687] mt-1">
            <span>Paysandú, Uruguay</span>
          </div>
        </div>

        {/* Center / Navigation Links */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            className="font-barlow text-[14px] text-[#424656] hover:text-[#1c1b1b] transition-colors"
            href="#inicio"
          >
            Inicio
          </a>
          <a
            className="font-barlow text-[14px] text-[#424656] hover:text-[#1c1b1b] transition-colors"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="font-barlow text-[14px] text-[#424656] hover:text-[#1c1b1b] transition-colors"
            href="#garantias"
          >
            Garantías
          </a>
          <a
            className="font-barlow text-[14px] text-[#424656] hover:text-[#1c1b1b] transition-colors"
            href="#estimador"
          >
            Estimador
          </a>
          <a
            className="font-barlow text-[14px] text-[#424656] hover:text-[#1c1b1b] transition-colors"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        {/* Right / Copyright */}
        <div className="font-mono-tech text-[12px] text-[#737687] text-left md:text-right">
          <div>© {new Date().getFullYear()} urudev.uy.</div>
          <div className="text-[11px] text-[#737687]/80 mt-0.5">Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  );
};
