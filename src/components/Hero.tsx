import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Award, X } from 'lucide-react';

interface HeroProps {
  onOpenAdvisorModal: () => void;
  onExploreCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdvisorModal, onExploreCalculator }) => {
  const [selectedMetric, setSelectedMetric] = useState<{
    title: string;
    value: string;
    description: string;
    details: string[];
    legalNote: string;
  } | null>(null);

  const metricsData = [
    {
      value: '100%',
      title: 'Propiedad del Código',
      description:
        'Sin ataduras de propiedad intelectual. Toda la arquitectura pasa formalmente a su empresa.',
      icon: 'verified_user',
      iconColor: 'text-[#007b61]',
      details: [
        'Repositorios Git privados transferidos con permisos de administración exclusiva.',
        'Documentación arquitectónica completa y diagramas de bases de datos.',
        'Contrato formal de cesión total de derechos patrimoniales bajo legislación uruguaya.',
        'Cero licencias recurrentes propietarias o dependencia forzada de proveedor.',
      ],
      legalNote: 'Cláusula de cesión total incorporada en todos los contratos de urudev.uy.',
    },
    {
      value: '2-4 sem',
      title: 'Entregables Funcionales',
      description:
        'Sprints ágiles con despliegues tangibles semanales evaluables desde etapas tempranas.',
      icon: 'speed',
      iconColor: 'text-[#005ff9]',
      details: [
        'Entorno de Staging privado accesible por su equipo de directores desde el día 7.',
        'Demostraciones operativas semanales con aceptación formal por escrito.',
        'Pipeline de CI/CD automatizado con pruebas de regresión automáticas.',
        'Iteración técnica sin burocracia comercial.',
      ],
      legalNote: 'Cronograma estipulado con entregables semanales fechados.',
    },
    {
      value: '90 Días',
      title: 'Soporte y Garantía Escrita',
      description:
        'Resolución prioritaria sin costo adicional posterior al lanzamiento en producción.',
      icon: 'gavel',
      iconColor: 'text-[#2156c9]',
      details: [
        'Atención técnica preferencial con SLA de respuesta inferior a 4 horas laborables.',
        'Corrección de cualquier bug o desvío de especificación sin costo extra.',
        'Monitoreo activo de logs, disponibilidad y performance en nube.',
        'Capacitación y handoff técnico a su equipo interno.',
      ],
      legalNote: 'Garantía respaldada por contrato firmado con personería jurídica en Uruguay.',
    },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#fcf9f8] py-16 md:py-24" id="inicio">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#f0edec] border border-[#c2c6d8]/50 mb-8 shadow-xs hover:border-[#005ff9]/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#3fd5ae] animate-pulse"></span>
          <span className="font-mono-tech text-[12px] uppercase tracking-wider text-[#1c1b1b] font-semibold">
            SOFTWARE B2B A MEDIDA · PAYSANDÚ, URUGUAY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-barlow text-[36px] sm:text-[46px] md:text-[56px] leading-[1.12] font-bold text-[#1c1b1b] max-w-4xl tracking-tight">
          Desarrollamos el Software que su Empresa Necesita para Escalar.
        </h1>

        {/* Executive Subtitle */}
        <p className="font-barlow text-[17px] sm:text-[19px] md:text-[20px] text-[#424656] max-w-3xl mt-6 mb-10 leading-relaxed font-normal">
          Sistemas de gestión, plataformas web y automatización con garantía de entrega, código 100%
          transferido y presupuesto cerrado.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#contacto"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#005ff9] text-white font-barlow text-[16px] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#0047ba] transition-all duration-200 shadow-xs hover:shadow-md active:scale-[0.99]"
          >
            <span>Solicitar Asesoría Gratuita</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>

          <a
            href="#servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#1c1b1b] font-barlow text-[16px] font-semibold px-8 py-3.5 rounded-lg border border-[#c2c6d8] hover:border-[#1c1b1b] hover:bg-[#f6f3f2] transition-all duration-200 shadow-xs"
          >
            Ver Servicios
          </a>

          <button
            onClick={onExploreCalculator}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-[#0049c5] hover:text-[#003ea8] font-barlow text-[15px] font-semibold px-4 py-2 hover:bg-[#ebe7e7]/60 rounded-lg transition-colors cursor-pointer"
          >
            <Zap className="w-4 h-4 text-[#005ff9]" />
            <span>Calcular costo estimado</span>
          </button>
        </div>

        {/* Trust Metrics Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24 pt-10 border-t border-[#c2c6d8]/40 text-left">
          {metricsData.map((m, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMetric(m)}
              className="bg-white p-6 sm:p-7 rounded-xl border border-[#c2c6d8]/60 shadow-xs hover:border-[#005ff9] hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tech text-[36px] sm:text-[42px] font-semibold tracking-tight text-[#0049c5]">
                  {m.value}
                </span>
                <div className="w-10 h-10 rounded-lg bg-[#f0edec] flex items-center justify-center group-hover:bg-[#dbe1ff] transition-colors">
                  <span className={`material-symbols-outlined ${m.iconColor} text-[26px]`}>
                    {m.icon}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-barlow text-[18px] font-bold text-[#1c1b1b] flex items-center justify-between">
                  <span>{m.title}</span>
                  <span className="text-[12px] font-mono-tech text-[#005ff9] opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver detalles ↗
                  </span>
                </h4>
                <p className="font-barlow text-[14px] text-[#424656] mt-1.5 leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metric Detail Modal */}
      {selectedMetric && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedMetric(null)}
        >
          <div
            className="bg-white rounded-xl border border-[#c2c6d8] shadow-2xl max-w-lg w-full p-6 sm:p-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMetric(null)}
              className="absolute top-5 right-5 p-1 rounded-lg text-zinc-500 hover:text-black hover:bg-zinc-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-tech text-[28px] font-bold text-[#0049c5]">
                {selectedMetric.value}
              </span>
              <span className="font-barlow text-[20px] font-bold text-[#1c1b1b]">
                {selectedMetric.title}
              </span>
            </div>

            <p className="font-barlow text-[15px] text-[#424656] mb-5">
              {selectedMetric.description}
            </p>

            <div className="space-y-2.5 mb-6 bg-[#f6f3f2] p-4 rounded-lg border border-[#e5e2e1]">
              <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#737687] block mb-1">
                Especificaciones Técnicas y Operativas
              </span>
              {selectedMetric.details.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[14px] font-barlow text-[#1c1b1b]">
                  <CheckCircle2 className="w-4 h-4 text-[#007b61] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#dbe1ff]/40 rounded-lg border border-[#b4c5ff] mb-6">
              <p className="font-mono-tech text-[12px] text-[#00174b]">
                ⚖️ <strong>Garantía:</strong> {selectedMetric.legalNote}
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedMetric(null)}
                className="px-4 py-2 text-[14px] font-barlow font-semibold text-[#424656] hover:bg-[#f0edec] rounded-lg"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setSelectedMetric(null);
                  onOpenAdvisorModal();
                }}
                className="px-5 py-2 text-[14px] font-barlow font-semibold text-white bg-[#005ff9] hover:bg-[#0047ba] rounded-lg shadow-xs"
              >
                Hablar con un Asesor
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
