import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail, MessageSquareShare, MapPin, Clock, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0d14] text-zinc-300 relative overflow-hidden border-t border-zinc-800/80">
      {/* Top Gradient Highlight Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#005ff9] to-transparent opacity-80" />

      {/* Ambient Radial Glows */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[350px] bg-[#005ff9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#00b087]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Background Watermark Behind Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none z-0 px-8">
        <span className="font-barlow text-[9.5vw] sm:text-[11vw] md:text-[11.8vw] font-black tracking-tighter leading-normal py-4 px-4 whitespace-nowrap bg-gradient-to-b from-white/[0.35] via-white/[0.22] to-white/[0.10] bg-clip-text text-transparent transform translate-y-2 sm:translate-y-4">
          urudev.uy
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 pt-16 pb-12 relative z-10">
        {/* Top Brand Showcase Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-zinc-800/70">
          <div>
            <Logo size="xl" variant="dark" showSubtitle={true} />
            <p className="font-barlow text-[16px] text-zinc-400 mt-4 max-w-xl leading-relaxed">
              Ingeniería de software de alta disponibilidad, desarrollo web a medida y automatización
              empresarial con código transferido y garantía de entrega.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#005ff9] hover:bg-[#0047ba] text-white font-barlow text-[15px] font-semibold rounded-xl shadow-lg shadow-[#005ff9]/25 transition-all duration-200 active:scale-[0.99]"
            >
              <span>Solicitar Asesoría</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            <a
              href="https://wa.me/59893424446?text=Hola,%20quisiera%20consultar%20sobre%20un%20proyecto%20de%20software%20con%20urudev.uy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-barlow text-[15px] font-medium rounded-xl border border-zinc-700/60 transition-all duration-200"
            >
              <MessageSquareShare className="w-4 h-4 text-[#3fd5ae]" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>

        {/* 4 Columns Navigation & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-zinc-800/70">
          {/* Col 1: Status & Brand Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[12px] font-mono-tech text-[#3fd5ae]">
              <span className="w-2 h-2 rounded-full bg-[#3fd5ae] animate-pulse" />
              <span>Sistemas en línea · 99.99% Uptime</span>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-zinc-400 font-barlow text-[14px]">
                <MapPin className="w-4 h-4 text-[#005ff9] shrink-0" />
                <span>Paysandú, Uruguay · Cobertura nacional</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-400 font-barlow text-[14px]">
                <Clock className="w-4 h-4 text-[#005ff9] shrink-0" />
                <span>Lun a Vie de 09:00 a 18:00 hs (GMT-3)</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-400 font-barlow text-[14px]">
                <Mail className="w-4 h-4 text-[#005ff9] shrink-0" />
                <a href="mailto:hola@urudev.uy" className="hover:text-white transition-colors underline decoration-zinc-700">
                  hola@urudev.uy
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Servicios */}
          <div className="lg:col-span-3">
            <h4 className="font-mono-tech text-[12px] uppercase tracking-wider text-zinc-400 font-semibold mb-4">
              Soluciones & Servicios
            </h4>
            <ul className="space-y-2.5 font-barlow text-[14.5px]">
              <li>
                <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">
                  Portales & Aplicaciones Web B2B
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">
                  Sistemas de Gestión & ERP a Medida
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">
                  Automatización de Procesos & Flujos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">
                  Inteligencia Artificial Aplicada (RAG)
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">
                  Integración de APIs & Microservicios
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Compromisos y Garantías */}
          <div className="lg:col-span-3">
            <h4 className="font-mono-tech text-[12px] uppercase tracking-wider text-zinc-400 font-semibold mb-4">
              Garantías & Calidad
            </h4>
            <ul className="space-y-2.5 font-barlow text-[14.5px]">
              <li>
                <a href="#garantias" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3fd5ae]" />
                  <span>Código 100% Transferido</span>
                </a>
              </li>
              <li>
                <a href="#garantias" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3fd5ae]" />
                  <span>Presupuesto Cerrado</span>
                </a>
              </li>
              <li>
                <a href="#garantias" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3fd5ae]" />
                  <span>90 Días de Garantía Escrita</span>
                </a>
              </li>
              <li>
                <a href="#garantias" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3fd5ae]" />
                  <span>Respaldo Local (Paysandú · UY)</span>
                </a>
              </li>
              <li>
                <a href="#estimador" className="text-[#005ff9] hover:underline transition-all font-medium">
                  → Estimador de Costo y Plazos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navegación Rápida */}
          <div className="lg:col-span-2">
            <h4 className="font-mono-tech text-[12px] uppercase tracking-wider text-zinc-400 font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 font-barlow text-[14.5px]">
              <li>
                <a href="#inicio" className="text-zinc-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#garantias" className="text-zinc-400 hover:text-white transition-colors">
                  Garantías
                </a>
              </li>
              <li>
                <a href="#estimador" className="text-zinc-400 hover:text-white transition-colors">
                  Estimador
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-zinc-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-mono-tech text-zinc-500">
          <div>
            © {new Date().getFullYear()} <span className="text-zinc-300 font-medium">urudev.uy</span> · Ingeniería de Software Enterprise.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-400">Paysandú, Uruguay</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
