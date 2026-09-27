import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Cpu, Server, Lock, Sparkles, Terminal } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToQuote: (serviceName: string) => void;
}

interface ServiceDetail {
  id: string;
  category: string;
  iconName: string;
  title: string;
  description: string;
  tagline: string;
  stack: string[];
  deliverables: string[];
  caseStudy: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToQuote }) => {
  const [activeModal, setActiveModal] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: '01',
      category: '01 // CORPORATIVO',
      iconName: 'web',
      title: 'Páginas Web & Portales Corporativos',
      description:
        'Presencia digital de alto impacto para captar clientes institucionales, transmitir máxima solidez empresarial y optimizar conversiones comerciales.',
      tagline: 'Rendimiento ultra veloz y SEO enterprise',
      stack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript', 'Cloudflare Edge CDN', 'Sanity / Headless CMS'],
      deliverables: [
        'Score de Core Web Vitals > 95/100 en Google PageSpeed',
        'Arquitectura SEO técnica completa con OpenGraph y JSON-LD estructurado',
        'Diseño responsive sin plantillas prefabricadas, 100% código nativo',
        'Panel de administración intuitivo para actualización de contenidos sin programar',
      ],
      caseStudy:
        'Caso real: Migración de portal financiero regional logrando reducción de 3.2s a 0.4s en tiempo de carga inicial y +42% en leads calificados.',
    },
    {
      id: '02',
      category: '02 // CORE BUSINESS',
      iconName: 'database',
      title: 'Sistemas & Software a Medida',
      description:
        'Paneles de gestión integral, ERPs ligeros, CRMs propietarios y plataformas de administración adaptadas al flujo exacto de su modelo corporativo.',
      tagline: '100% parametrizado según sus operaciones',
      stack: ['TypeScript', 'Node.js / Express', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'AWS / Google Cloud'],
      deliverables: [
        'Modelado de base de datos relacional con integridad referencial ACID estricta',
        'Control de accesos basado en roles (RBAC) y bitácora de auditoría inmutable',
        'Módulos a medida: facturación electrónica DGI, inventario, logística o clientes',
        'APIs RESTful / GraphQL documentadas con OpenAPI / Swagger',
      ],
      caseStudy:
        'Caso real: Plataforma de gestión operativa para empresa importadora reemplazando 18 planillas de Excel con sincronización de inventario en tiempo real.',
    },
    {
      id: '03',
      category: '03 // EFICIENCIA',
      iconName: 'sync_alt',
      title: 'Automatización de Procesos',
      description:
        'Interconectamos sus herramientas, bases de datos y APIs para eliminar tareas manuales repetitivas, reduciendo errores humanos y ahorrando cientos de horas de equipo.',
      tagline: 'Integración limpia con pasarelas y ERPs',
      stack: ['Python', 'Node.js', 'Webhooks', 'RabbitMQ / Kafka', 'Stripe / Mercado Pago / DGI', 'n8n / Workflows custom'],
      deliverables: [
        'Pipelines de sincronización de datos bidireccional entre CRM, ERP y pasarelas',
        'Alertas instantáneas a Slack/WhatsApp corporativo ante eventos críticos de negocio',
        'Reconciliación bancaria y facturación automática sin intervención manual',
        'Monitoreo y recuperación automática de fallos con reintentos exponenciales',
      ],
      caseStudy:
        'Caso real: Automatización del circuito de cobranzas y emisión fiscal reduciendo 120 horas mensuales de carga administrativa a cero intervención manual.',
    },
    {
      id: '04',
      category: '04 // VANGUARDIA',
      iconName: 'smart_toy',
      title: 'Inteligencia Artificial Aplicada',
      description:
        'Implementación de asistentes contextuales inteligentes y análisis automatizado de documentos corporativos con estricta gobernanza y privacidad de datos.',
      tagline: 'Privacidad garantizada bajo entornos propios',
      stack: ['Python', 'LangChain / LlamaIndex', 'Gemini / Claude / OpenAI Enterprise', 'Vector DB (pgvector / Qdrant)', 'Embeddings'],
      deliverables: [
        'RAG (Retrieval-Augmented Generation) sobre manuales, contratos o catálogos internos',
        'Extracción automática de datos estructurados de PDFs, facturas y órdenes de compra',
        'Entorno aislado: sus datos empresariales nunca se utilizan para reentrenar modelos públicos',
        'Auditoría y filtros de guardrails para respuestas confiables y sin alucinaciones',
      ],
      caseStudy:
        'Caso real: Asistente interno de cotizaciones técnicas para industria metalmecánica, reduciendo el tiempo de respuesta a pliegos de 4 días a 15 minutos.',
    },
  ];

  return (
    <section className="w-full bg-[#fcf9f8] py-20 lg:py-28" id="servicios">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono-tech text-[12px] uppercase text-[#0049c5] tracking-widest font-semibold block mb-2">
            SERVICIOS CLAVE
          </span>
          <h2 className="font-barlow text-[32px] sm:text-[40px] font-bold text-[#1c1b1b] tracking-tight">
            Soluciones que Desarrollamos
          </h2>
          <p className="font-barlow text-[16px] text-[#424656] mt-3">
            Software enfocado exclusivamente en rentabilidad operativa, automatización y tracción comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              onClick={() => setActiveModal(svc)}
              className="bg-white p-8 rounded-xl border border-[#c2c6d8]/60 shadow-xs flex flex-col justify-between hover:border-[#005ff9] hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tech text-[12px] font-semibold text-[#737687]">
                    {svc.category}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#f0edec] flex items-center justify-center group-hover:bg-[#dbe1ff] transition-colors">
                    <span className="material-symbols-outlined text-[#0049c5] text-[26px]">
                      {svc.iconName}
                    </span>
                  </div>
                </div>

                <h3 className="font-barlow text-[22px] sm:text-[24px] font-bold text-[#1c1b1b] mb-3 group-hover:text-[#0049c5] transition-colors flex items-center justify-between">
                  <span>{svc.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#005ff9] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="font-barlow text-[15px] sm:text-[16px] text-[#424656] leading-relaxed">
                  {svc.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#f0edec] flex items-center justify-between">
                <span className="text-[#0049c5] font-barlow text-[14px] font-semibold">
                  {svc.tagline}
                </span>
                <span className="font-mono-tech text-[12px] text-[#737687] group-hover:text-[#005ff9] transition-colors">
                  Ficha técnica +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-xl border border-[#c2c6d8] shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-1 rounded-lg text-zinc-500 hover:text-black hover:bg-zinc-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono-tech text-[12px] font-semibold text-[#0049c5] block mb-1">
              {activeModal.category}
            </span>
            <h3 className="font-barlow text-[26px] font-bold text-[#1c1b1b] mb-3">
              {activeModal.title}
            </h3>
            <p className="font-barlow text-[15px] text-[#424656] mb-6 leading-relaxed">
              {activeModal.description}
            </p>

            {/* Tech Stack Chips */}
            <div className="mb-6">
              <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#737687] block mb-2">
                Stack Tecnológico de Grado Enterprise
              </span>
              <div className="flex flex-wrap gap-2">
                {activeModal.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="font-mono-tech text-[12px] px-2.5 py-1 rounded bg-[#f0edec] text-[#1c1b1b] border border-[#e5e2e1]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="mb-6 bg-[#f6f3f2] p-4 sm:p-5 rounded-lg border border-[#e5e2e1]">
              <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#737687] block mb-3">
                Entregables y Estándares de Calidad
              </span>
              <div className="space-y-2.5">
                {activeModal.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[14px] font-barlow text-[#1c1b1b]">
                    <Check className="w-4 h-4 text-[#007b61] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Case */}
            <div className="mb-6 p-4 rounded-lg bg-[#dbe1ff]/30 border border-[#b4c5ff]">
              <p className="font-barlow text-[13px] text-[#00174b] italic">
                {activeModal.caseStudy}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e5e2e1]">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-4 py-2.5 text-[14px] font-barlow font-semibold text-[#424656] hover:bg-[#f0edec] rounded-lg transition-colors"
              >
                Cerrar ficha
              </button>

              <button
                type="button"
                onClick={() => {
                  const sTitle = activeModal.title;
                  setActiveModal(null);
                  onSelectServiceToQuote(sTitle);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#005ff9] hover:bg-[#0047ba] text-white font-barlow text-[14px] font-semibold px-6 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                <span>Cotizar {activeModal.title}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
