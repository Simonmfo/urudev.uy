import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { ServicesSection } from './components/ServicesSection';
import { ProjectCalculator } from './components/ProjectCalculator';
import { GuaranteesSection } from './components/GuaranteesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdvisorModal } from './components/AdvisorModal';

export default function App() {
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [prefilledContactMessage, setPrefilledContactMessage] = useState('');

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'garantias', 'estimador', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleApplyScopeToContact = (scopeSummary: string) => {
    setPrefilledContactMessage(scopeSummary);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceToQuote = (serviceName: string) => {
    setPrefilledContactMessage(`Estimados urudev.uy,\n\nNos gustaría solicitar una cotización formal y asesoría técnica para el servicio de: ${serviceName}.\n\nQuedamos a disposición para coordinar una llamada de evaluación preliminar.`);
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCalculator = () => {
    const el = document.getElementById('estimador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f8] text-[#1c1b1b] font-barlow selection:bg-[#005ff9] selection:text-white">
      {/* Sticky Executive Header */}
      <Navbar
        activeSection={activeSection}
        onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pt-20">
        {/* Hero Section (#inicio) */}
        <Hero
          onOpenAdvisorModal={() => setIsAdvisorModalOpen(true)}
          onExploreCalculator={handleExploreCalculator}
        />

        {/* Engineering Methodology: ¿Por qué urudev.uy? */}
        <WhyUs />

        {/* Key Services (#servicios) */}
        <ServicesSection onSelectServiceToQuote={handleSelectServiceToQuote} />

        {/* Project Scope & Budget Calculator (#estimador) */}
        <ProjectCalculator onApplyScopeToContact={handleApplyScopeToContact} />

        {/* Contractual Guarantees (#garantias) */}
        <GuaranteesSection />

        {/* Contact & Commercial Inquiry (#contacto) */}
        <ContactSection
          prefilledMessage={prefilledContactMessage}
          onClearPrefilledMessage={() => setPrefilledContactMessage('')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Advisor Scheduling Modal */}
      <AdvisorModal
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
      />
    </div>
  );
}
