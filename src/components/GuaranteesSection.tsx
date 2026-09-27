import React, { useState } from 'react';
import { FileText, Shield, CheckCircle2, ChevronRight, X, Building, Scale, Lock } from 'lucide-react';

export const GuaranteesSection: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const guarantees = [
    {
      id: 'sla',
      icon: 'assignment_turned_in',
      title: 'Contrato y SLA Claro',
      description:
        'Compromiso formal con cronogramas pactados y penalizaciones por demora estipuladas por escrito.',
      badge: 'Garantía por Contrato',
      modalTitle: 'Términos del Acuerdo de Nivel de Servicio (SLA)',
      modalDetails: [
        'Cronograma de hitos inmutable con fechas límites taxativas acordadas antes del cobro de anticipos.',
        'Penalización contractual por día de desvío no imputable a cambios de alcance solicitados por el cliente.',
        'Tiempos de respuesta para incidencias en producción: Críticas < 2 horas, Altas < 6 horas, Menores < 24 horas.',
        'Entorno de pruebas idéntico a producción provisto durante todo el desarrollo para validación de criterios de aceptación.',
      ],
    },
    {
      id: 'lockin',
      icon: 'lock_open',
      title: 'Cero Vendor Lock-in',
      description:
        'El código fuente, credenciales e infraestructura pertenecen 100% a su empresa. Libertad tecnológica total.',
      badge: 'Propiedad Total',
      modalTitle: 'Política de Soberanía Tecnológica y Código Abierto',
      modalDetails: [
        'Cesión completa de derechos patrimoniales sobre todo el código fuente generado.',
        'Uso exclusivo de lenguajes estándar de la industria (TypeScript, Python, Go, PostgreSQL) sin frameworks oscuros ni dependencias cautivas.',
        'Configuraciones de infraestructura como código (Docker, Terraform, CI/CD) entregadas para fácil migración a cualquier proveedor de nube.',
        'Usted es el único propietario de las cuentas de AWS, Google Cloud, GitHub y registros DNS.',
      ],
    },
    {
      id: 'local',
      icon: 'location_city',
      title: 'Facturación y Respaldo Local',
      description:
        'Empresa uruguaya debidamente registrada. Emisión de facturas con RUT y soporte técnico en zona horaria local.',
      badge: 'Soporte Montevideo',
      modalTitle: 'Respaldo Jurídico y Fiscal en Uruguay',
      modalDetails: [
        'Sociedad constituida y domiciliada en Montevideo, Uruguay, bajo jurisdicción legal de los tribunales de Montevideo.',
        'Emisión de comprobantes fiscales electrónicos oficiales con RUT (IVA deducible para empresas uruguayas).',
        'Ingenieros de software radicados localmente trabajando en huso horario GMT-3 (sin desfasajes horarios de ultramar).',
        'Disponibilidad para reuniones ejecutivas presenciales en nuestra oficina de Plaza Independencia 838.',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#f6f3f2] py-20" id="garantias">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono-tech text-[12px] uppercase text-[#0049c5] tracking-widest font-semibold block mb-2">
            RESPALDO LEGAL &amp; TÉCNICO
          </span>
          <h2 className="font-barlow text-[32px] sm:text-[40px] font-bold text-[#1c1b1b] tracking-tight">
            Tranquilidad y Respaldo Contractual
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {guarantees.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLegalModal(item.id)}
              className="bg-white p-6 md:p-8 rounded-xl border border-[#c2c6d8]/60 shadow-xs hover:border-[#0049c5] hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-lg bg-[#f0edec] flex items-center justify-center shrink-0 text-[#0049c5] group-hover:bg-[#dbe1ff] transition-colors">
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-barlow text-[18px] sm:text-[20px] font-bold text-[#1c1b1b] group-hover:text-[#0049c5] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-barlow text-[14px] sm:text-[15px] text-[#424656] mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
                <span className="px-3.5 py-1.5 rounded-sm bg-[#f0edec] text-[#1c1b1b] font-mono-tech text-[12px] font-semibold whitespace-nowrap group-hover:bg-[#dbe1ff] group-hover:text-[#00174b] transition-colors">
                  {item.badge}
                </span>
                <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-[#0049c5] transition-colors hidden sm:block" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Legal / SLA details */}
      {activeLegalModal && (() => {
        const item = guarantees.find((g) => g.id === activeLegalModal);
        if (!item) return null;
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setActiveLegalModal(null)}
          >
            <div
              className="bg-white rounded-xl border border-[#c2c6d8] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveLegalModal(null)}
                className="absolute top-5 right-5 p-1 rounded-lg text-zinc-500 hover:text-black hover:bg-zinc-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded bg-[#dbe1ff] text-[#00174b] font-mono-tech text-[12px] font-semibold">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-barlow text-[22px] font-bold text-[#1c1b1b] mb-2">
                {item.modalTitle}
              </h3>
              <p className="font-barlow text-[14px] text-[#424656] mb-5">
                {item.description}
              </p>

              <div className="space-y-3 bg-[#f6f3f2] p-4 sm:p-5 rounded-lg border border-[#e5e2e1] mb-6">
                {item.modalDetails.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[14px] font-barlow text-[#1c1b1b]">
                    <CheckCircle2 className="w-4 h-4 text-[#007b61] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setActiveLegalModal(null)}
                  className="px-5 py-2 text-[14px] font-barlow font-semibold text-white bg-[#005ff9] hover:bg-[#0047ba] rounded-lg shadow-xs"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
