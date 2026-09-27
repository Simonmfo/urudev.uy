import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Clock, ShieldCheck, DollarSign } from 'lucide-react';

interface ProjectCalculatorProps {
  onApplyScopeToContact: (scopeSummary: string) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({
  onApplyScopeToContact,
}) => {
  const [projectType, setProjectType] = useState<'portal' | 'custom_erp' | 'automation' | 'ai'>('custom_erp');
  const [scale, setScale] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  const [integrations, setIntegrations] = useState<string[]>([
    'db_existing',
    'dgi_billing',
  ]);
  const [urgency, setUrgency] = useState<'standard' | 'express'>('standard');

  const handleToggleIntegration = (id: string) => {
    if (integrations.includes(id)) {
      setIntegrations(integrations.filter((i) => i !== id));
    } else {
      setIntegrations([...integrations, id]);
    }
  };

  // Pricing & Timeline calculations
  const calculateEstimates = () => {
    let basePrice = 2800;
    let baseWeeks = 3;

    if (projectType === 'portal') {
      basePrice = 1800;
      baseWeeks = 2;
    } else if (projectType === 'custom_erp') {
      basePrice = 3600;
      baseWeeks = 4;
    } else if (projectType === 'automation') {
      basePrice = 2400;
      baseWeeks = 3;
    } else if (projectType === 'ai') {
      basePrice = 4200;
      baseWeeks = 4;
    }

    if (scale === 'mvp') {
      basePrice *= 0.85;
      baseWeeks = Math.max(2, baseWeeks - 1);
    } else if (scale === 'enterprise') {
      basePrice *= 1.45;
      baseWeeks += 2;
    }

    // Add per integration
    const integrationCost = integrations.length * 450;
    const finalPrice = Math.round((basePrice + integrationCost) / 100) * 100;
    const weeksTotal = urgency === 'express' ? Math.max(2, Math.round(baseWeeks * 0.75)) : baseWeeks;

    return {
      priceMin: finalPrice,
      priceMax: Math.round(finalPrice * 1.25),
      weeks: weeksTotal,
    };
  };

  const estimates = calculateEstimates();

  const handleTransfer = () => {
    const typeLabels = {
      portal: 'Portal / Web Corporativa',
      custom_erp: 'Sistema & Software a Medida (ERP/CRM)',
      automation: 'Automatización de Procesos & APIs',
      ai: 'Inteligencia Artificial Aplicada & LLM Interno',
    };
    const scaleLabels = {
      mvp: 'MVP de Validación Rápida',
      standard: 'Plataforma Operativa Estándar',
      enterprise: 'Infraestructura Enterprise Multi-Sucursal',
    };

    const text = `Presupuesto estimado configurado:
- Tipo: ${typeLabels[projectType]}
- Escala: ${scaleLabels[scale]}
- Integraciones (${integrations.length}): ${integrations.join(', ') || 'Ninguna'}
- Plazo objetivo: ${urgency === 'express' ? 'Acelerado (Sprints prioritarios)' : 'Estándar'}
- Rango referencial: USD $${estimates.priceMin.toLocaleString()} - $${estimates.priceMax.toLocaleString()} (~${estimates.weeks} semanas de desarrollo)`;

    onApplyScopeToContact(text);
  };

  return (
    <section className="w-full bg-[#f6f3f2] py-20 border-t border-[#e5e2e1]" id="estimador">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0edec] border border-[#c2c6d8]/60 mb-3">
            <Calculator className="w-4 h-4 text-[#0049c5]" />
            <span className="font-mono-tech text-[12px] uppercase tracking-wider text-[#1c1b1b] font-semibold">
              TRANSPARENCIA TOTAL DE COSTOS
            </span>
          </div>
          <h2 className="font-barlow text-[32px] sm:text-[40px] font-bold text-[#1c1b1b] tracking-tight">
            Estimador de Proyecto y Alcance Técnico
          </h2>
          <p className="font-barlow text-[16px] text-[#424656] mt-3">
            Configure las variables clave de su necesidad y obtenga una estimación instantánea de
            semanas de desarrollo y rango de inversión con presupuesto cerrado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#c2c6d8]/60 shadow-xs space-y-7">
            {/* 1. Solution Type */}
            <div>
              <label className="block font-barlow text-[15px] font-bold text-[#1c1b1b] mb-3">
                1. Tipo de Solución Tecnológica
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'portal', label: 'Web & Portal Corporativo', sub: 'SEO, alta conversión y branding' },
                  { id: 'custom_erp', label: 'Software a Medida / ERP', sub: 'Gestión interna y flujos core' },
                  { id: 'automation', label: 'Automatización & APIs', sub: 'Conexión de herramientas y CRM' },
                  { id: 'ai', label: 'IA y Asistente Contextual', sub: 'RAG sobre documentos propios' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'border-[#005ff9] bg-[#dbe1ff]/20 ring-1 ring-[#005ff9]'
                        : 'border-[#e5e2e1] hover:border-[#c2c6d8] bg-white'
                    }`}
                  >
                    <div className="font-barlow text-[15px] font-bold text-[#1c1b1b]">{item.label}</div>
                    <div className="font-barlow text-[12px] text-[#424656] mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scale */}
            <div>
              <label className="block font-barlow text-[15px] font-bold text-[#1c1b1b] mb-3">
                2. Nivel de Escala y Complejidad
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mvp', title: 'MVP Ágil', desc: 'Funciones esenciales' },
                  { id: 'standard', title: 'Operativo', desc: 'Multi-rol y flujos completos' },
                  { id: 'enterprise', title: 'Enterprise', desc: 'Alta carga y redundancia' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScale(s.id as any)}
                    className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                      scale === s.id
                        ? 'border-[#005ff9] bg-[#dbe1ff]/20 font-bold text-[#0049c5] ring-1 ring-[#005ff9]'
                        : 'border-[#e5e2e1] text-[#424656] hover:border-[#c2c6d8]'
                    }`}
                  >
                    <div className="font-barlow text-[14px] font-semibold">{s.title}</div>
                    <div className="text-[11px] font-barlow text-[#737687]">{s.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Integrations */}
            <div>
              <label className="block font-barlow text-[15px] font-bold text-[#1c1b1b] mb-3">
                3. Integraciones Necesarias
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'dgi_billing', label: 'Facturación Electrónica (DGI Uruguay)' },
                  { id: 'payment_gateways', label: 'Pasarelas de Pago (Stripe / Mercado Pago)' },
                  { id: 'db_existing', label: 'Migración desde Bases de Datos existentes' },
                  { id: 'sso_auth', label: 'Autenticación Corporativa SSO / Google / Azure' },
                ].map((integ) => {
                  const checked = integrations.includes(integ.id);
                  return (
                    <div
                      key={integ.id}
                      onClick={() => handleToggleIntegration(integ.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg border text-[13px] font-barlow cursor-pointer transition-all ${
                        checked
                          ? 'border-[#005ff9]/60 bg-[#f0edec] text-[#1c1b1b] font-medium'
                          : 'border-[#e5e2e1] text-[#424656] hover:bg-[#fafafa]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}}
                        className="rounded border-[#c2c6d8] text-[#005ff9] focus:ring-0 cursor-pointer"
                      />
                      <span>{integ.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Timeline priority */}
            <div>
              <label className="block font-barlow text-[15px] font-bold text-[#1c1b1b] mb-2">
                4. Régimen de Entrega
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer font-barlow text-[14px] text-[#1c1b1b]">
                  <input
                    type="radio"
                    name="urgency"
                    checked={urgency === 'standard'}
                    onChange={() => setUrgency('standard')}
                    className="text-[#005ff9]"
                  />
                  <span>Cronograma Estándar (Recomendado)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-barlow text-[14px] text-[#1c1b1b]">
                  <input
                    type="radio"
                    name="urgency"
                    checked={urgency === 'express'}
                    onChange={() => setUrgency('express')}
                    className="text-[#005ff9]"
                  />
                  <span>Prioridad Alta (Sprints de máxima aceleración)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Summary Quote Box */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-xl border border-[#005ff9]/40 shadow-md relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#e5e2e1] mb-6">
              <span className="font-mono-tech text-[12px] font-semibold text-[#0049c5] uppercase tracking-wider">
                RESUMEN DE ESTIMACIÓN
              </span>
              <span className="font-mono-tech text-[11px] bg-[#dbe1ff] text-[#00174b] px-2.5 py-0.5 rounded font-semibold">
                Presupuesto Cerrado
              </span>
            </div>

            {/* Price Box */}
            <div className="mb-6">
              <span className="font-barlow text-[13px] text-[#737687] block mb-1">
                Rango de Inversión Orientativo
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono-tech text-[32px] sm:text-[38px] font-bold text-[#1c1b1b]">
                  USD ${estimates.priceMin.toLocaleString()}
                </span>
                <span className="font-barlow text-[16px] text-[#424656]">
                  - ${estimates.priceMax.toLocaleString()}
                </span>
              </div>
              <span className="font-barlow text-[12px] text-[#737687]">
                *Precio exacto fijado en contrato tras relevamiento técnico preliminar.
              </span>
            </div>

            {/* Timeline */}
            <div className="p-4 rounded-lg bg-[#f6f3f2] border border-[#e5e2e1] mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#0049c5]" />
                <div>
                  <div className="font-barlow text-[14px] font-bold text-[#1c1b1b]">
                    Tiempo Estimado de Entrega
                  </div>
                  <div className="font-barlow text-[12px] text-[#424656]">
                    Con despliegues funcionales cada 7 días
                  </div>
                </div>
              </div>
              <span className="font-mono-tech text-[18px] font-bold text-[#0049c5]">
                {estimates.weeks} semanas
              </span>
            </div>

            {/* What's always included */}
            <div className="space-y-2.5 mb-8 text-[13px] font-barlow text-[#424656]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007b61] shrink-0" />
                <span>100% Cesión y Propiedad del Código Fuente</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007b61] shrink-0" />
                <span>90 Días de Garantía y Soporte Técnico Escrito</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#007b61] shrink-0" />
                <span>Facturación uruguaya formal con RUT e IVA deducible</span>
              </div>
            </div>

            {/* Apply button */}
            <button
              onClick={handleTransfer}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#005ff9] hover:bg-[#0047ba] text-white font-barlow text-[15px] font-semibold px-6 py-3.5 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-[0.99]"
            >
              <span>Aplicar este alcance al formulario</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
