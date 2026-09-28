import React, { useState } from 'react';
import { GitBranch, Layers, Shield, Terminal, ArrowRight, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [showWorkflow, setShowWorkflow] = useState(false);

  const workflowSteps = [
    {
      step: '01',
      phase: 'Día 1-3 · Arquitectura & Presupuesto Cerrado',
      desc: 'Levantamiento de especificaciones, modelado relacional y contrato formal con alcance inmutable.',
      deliverable: 'Diagrama C4 + Especificación OpenAPI + Cronograma fechado',
    },
    {
      step: '02',
      phase: 'Semana 1-2 · Sprints & Entorno de Staging',
      desc: 'Desarrollo en ramas Git protegidas, CI/CD continuo y acceso a servidor staging para pruebas reales.',
      deliverable: 'Versión funcional preliminar navegable y testeable',
    },
    {
      step: '03',
      phase: 'Semana 3-4 · Auditoría, QA & Ciberseguridad',
      desc: 'Pruebas de carga, análisis estático de vulnerabilidades OWASP y optimización de latencia.',
      deliverable: 'Reporte de seguridad y certificación de cobertura de código',
    },
    {
      step: '04',
      phase: 'Entrega · Despliegue & Transferencia 100%',
      desc: 'Puesta en marcha en su nube (AWS/GCP/DigitalOcean), transferencia de dominios y repositorios con 90 días de soporte.',
      deliverable: 'Código fuente en su poder + Cesión de propiedad intelectual',
    },
  ];

  return (
    <section className="w-full bg-[#f6f3f2] py-20 border-y border-[#e5e2e1]" id="metodologia">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono-tech text-[12px] uppercase text-[#0049c5] tracking-widest font-semibold block mb-2">
              METODOLOGÍA DE INGENIERÍA
            </span>
            <h2 className="font-barlow text-[32px] sm:text-[40px] font-bold text-[#1c1b1b] tracking-tight">
              ¿Por qué urudev.uy?
            </h2>
          </div>
          <p className="font-barlow text-[16px] text-[#424656] max-w-md leading-relaxed">
            Eliminamos la fricción habitual de las agencias tradicionales con procesos ejecutivos
            transparentes y control total de costos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1 */}
          <div className="bg-white p-8 rounded-xl border border-[#c2c6d8]/60 shadow-xs hover:border-[#0049c5] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#f0edec] flex items-center justify-center text-[#0049c5] mb-6">
                <span className="material-symbols-outlined text-[28px]">request_quote</span>
              </div>
              <h3 className="font-barlow text-[20px] font-bold text-[#1c1b1b] mb-3">
                Presupuesto Cerrado
              </h3>
              <p className="font-barlow text-[15px] text-[#424656] leading-relaxed">
                Alcance claro desde el día uno. Sin costos imprevistos, desvíos de presupuesto ni
                cobros adicionales sorpresa.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edec] flex items-center gap-2 text-[13px] font-mono-tech text-[#007b61]">
              <Check className="w-4 h-4" />
              <span>Sin cobros por hora fantasma</span>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white p-8 rounded-xl border border-[#c2c6d8]/60 shadow-xs hover:border-[#0049c5] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#f0edec] flex items-center justify-center text-[#0049c5] mb-6">
                <span className="material-symbols-outlined text-[28px]">domain_verification</span>
              </div>
              <h3 className="font-barlow text-[20px] font-bold text-[#1c1b1b] mb-3">
                Entrega Llave en Mano
              </h3>
              <p className="font-barlow text-[15px] text-[#424656] leading-relaxed">
                Nos encargamos de toda la cadena de valor: diseño de arquitectura, desarrollo robusto,
                despliegue en nube y puesta en marcha.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edec] flex items-center gap-2 text-[13px] font-mono-tech text-[#007b61]">
              <Check className="w-4 h-4" />
              <span>Infraestructura + DB + Dominios</span>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white p-8 rounded-xl border border-[#c2c6d8]/60 shadow-xs hover:border-[#0049c5] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#f0edec] flex items-center justify-center text-[#0049c5] mb-6">
                <span className="material-symbols-outlined text-[28px]">forum</span>
              </div>
              <h3 className="font-barlow text-[20px] font-bold text-[#1c1b1b] mb-3">
                Comunicación Directa
              </h3>
              <p className="font-barlow text-[15px] text-[#424656] leading-relaxed">
                Trato fluido y ágil sin intermediarios comerciales. Usted conversa directamente con
                ingenieros de software senior en Uruguay.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0edec] flex items-center gap-2 text-[13px] font-mono-tech text-[#007b61]">
              <Check className="w-4 h-4" />
              <span>Canal Slack/WhatsApp dedicado</span>
            </div>
          </div>
        </div>

        {/* Interactive Delivery Pipeline Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowWorkflow(!showWorkflow)}
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#c2c6d8] bg-white text-[#1c1b1b] font-barlow text-[14px] font-semibold hover:border-[#0049c5] hover:bg-[#fcf9f8] transition-all cursor-pointer shadow-xs"
          >
            <GitBranch className="w-4 h-4 text-[#005ff9]" />
            <span>{showWorkflow ? 'Ocultar flujo de entrega ágil' : 'Ver cómo es el proceso paso a paso'}</span>
          </button>
        </div>

        {/* Expandable Workflow Timeline */}
        {showWorkflow && (
          <div className="mt-8 bg-white p-6 sm:p-8 rounded-xl border border-[#005ff9]/30 shadow-md animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e5e2e1]">
              <div>
                <h4 className="font-barlow text-[18px] font-bold text-[#1c1b1b]">
                  Ciclo de Ejecución de Ingeniería urudev.uy
                </h4>
                <p className="font-barlow text-[14px] text-[#424656]">
                  Garantía de predictibilidad desde la firma hasta el pase a producción
                </p>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 bg-[#dbe1ff] text-[#00174b] font-mono-tech text-[12px] font-semibold rounded">
                SLA 100% Garantizado
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {workflowSteps.map((step) => (
                <div key={step.step} className="p-4 rounded-lg bg-[#f6f3f2] border border-[#e5e2e1]">
                  <span className="font-mono-tech text-[13px] font-bold text-[#005ff9] block mb-1">
                    FASE // {step.step}
                  </span>
                  <h5 className="font-barlow text-[15px] font-bold text-[#1c1b1b] mb-2">
                    {step.phase}
                  </h5>
                  <p className="font-barlow text-[13px] text-[#424656] mb-3 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="text-[12px] font-mono-tech text-[#007b61] bg-white p-2 rounded border border-[#e5e2e1]">
                    <strong>Entregable:</strong> {step.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
