import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Calendar, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenAdvisorModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdvisorModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Garantías', href: '#garantias', id: 'garantias' },
    { name: 'Estimador', href: '#estimador', id: 'estimador' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fcf9f8]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(20,20,20,0.06)] border-b border-[#e5e2e1]'
          : 'bg-[#fcf9f8]/90 backdrop-blur-md'
      }`}
    >
      <div className="h-20 max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand */}
        <a href="#inicio" className="shrink-0 flex items-center gap-3">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors py-2 px-3.5 rounded-lg font-barlow text-[15px] font-medium ${
                  isActive
                    ? 'bg-[#ebe7e7] text-[#1c1b1b] font-semibold'
                    : 'text-[#424656] hover:text-[#1c1b1b] hover:bg-[#f0edec]/70'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action button & Avatar */}
        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
          <button
            onClick={onOpenAdvisorModal}
            type="button"
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#0049c5] text-white font-barlow text-[14px] font-semibold rounded-lg px-5 py-2.5 hover:bg-[#003ea8] transition-colors shadow-xs active:scale-[0.99] cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#aeffe3]" />
            <span>Hablar con un Asesor</span>
          </button>

          {/* Quick direct contact avatar trigger */}
          <a
            href="#contacto"
            title="Contacto directo con ingeniería"
            className="w-9 h-9 rounded-full bg-[#0049c5] hover:bg-[#003ea8] transition-colors flex items-center justify-center shrink-0 text-white shadow-xs cursor-pointer group"
          >
            <span className="material-symbols-outlined text-white text-[20px] group-hover:scale-110 transition-transform">
              person
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1c1b1b] hover:bg-[#f0edec] transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f8] border-b border-[#e5e2e1] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg font-barlow text-[16px] ${
                  activeSection === link.id
                    ? 'bg-[#ebe7e7] text-[#1c1b1b] font-semibold'
                    : 'text-[#424656] hover:bg-[#f0edec]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </a>
            ))}
            <div className="pt-3 border-t border-[#e5e2e1] mt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdvisorModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0049c5] text-white font-barlow text-[15px] font-semibold rounded-lg px-4 py-3 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#aeffe3]" />
                <span>Hablar con un Asesor</span>
              </button>
              <a
                href="https://wa.me/59899000000?text=Hola,%20deseo%20consultar%20sobre%20desarrollo%20de%20software%20con%20urudev.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#f0edec] text-[#1c1b1b] font-barlow text-[14px] font-medium rounded-lg px-4 py-2.5 hover:bg-[#e5e2e1]"
              >
                <PhoneCall className="w-4 h-4 text-[#00604b]" />
                <span>WhatsApp Directo (+598)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
