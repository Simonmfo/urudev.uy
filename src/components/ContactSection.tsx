import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Send, Check, Copy, CheckCheck, MessageSquareShare } from 'lucide-react';

interface ContactSectionProps {
  prefilledMessage?: string;
  onClearPrefilledMessage?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledMessage = '',
  onClearPrefilledMessage,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending inquiry to engineering inbox
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearPrefilledMessage) onClearPrefilledMessage();
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hola@urudev.uy');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <section className="w-full bg-[#fcf9f8] py-20 lg:py-28 border-t border-[#c2c6d8]/40" id="contacto">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono-tech text-[12px] uppercase text-[#0049c5] tracking-widest font-semibold block mb-2">
                HABLEMOS DE SU PROYECTO
              </span>
              <h2 className="font-barlow text-[32px] sm:text-[40px] font-bold text-[#1c1b1b] tracking-tight">
                ¿Tiene un proyecto en mente?
              </h2>
              <p className="font-barlow text-[16px] text-[#424656] mt-4 leading-relaxed">
                Coordinemos una llamada de 15 minutos para evaluar su requerimiento técnico y enviarle
                una propuesta formal con presupuesto cerrado y sin compromiso.
              </p>
            </div>

            <div className="mt-10 space-y-6 pt-8 border-t border-[#c2c6d8]/40">
              {/* Mail */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f0edec] flex items-center justify-center text-[#0049c5] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <span className="font-barlow text-[14px] text-[#424656] block">Correo directo</span>
                    <a
                      href="mailto:hola@urudev.uy"
                      className="font-barlow text-[18px] font-semibold text-[#1c1b1b] hover:text-[#0049c5] transition-colors"
                    >
                      hola@urudev.uy
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copiar email"
                  className="p-2 rounded-lg text-[#737687] hover:text-[#1c1b1b] hover:bg-[#f0edec] transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <span className="text-xs font-mono-tech text-[#007b61] flex items-center gap-1">
                      <CheckCheck className="w-4 h-4" /> Copiado
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0edec] flex items-center justify-center text-[#0049c5] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <span className="font-barlow text-[14px] text-[#424656] block">Ubicación</span>
                  <span className="font-barlow text-[18px] font-semibold text-[#1c1b1b]">
                    Paysandú, Uruguay
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0edec] flex items-center justify-center text-[#00604b] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <span className="font-barlow text-[14px] text-[#424656] block">
                    Disponibilidad de atención
                  </span>
                  <span className="font-barlow text-[18px] font-semibold text-[#1c1b1b]">
                    Lunes a Viernes de 09:00 a 18:00 (GMT-3)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Contact */}
            <div className="mt-8 p-4 rounded-xl bg-white border border-[#c2c6d8]/60 shadow-xs flex items-center justify-between">
              <div>
                <span className="font-barlow text-[14px] font-bold text-[#1c1b1b] block">
                  ¿Urgencia operativa o licitación en curso?
                </span>
                <span className="font-barlow text-[12px] text-[#424656]">
                  Chatee al instante con un Ingeniero de Soluciones
                </span>
              </div>
              <a
                href="https://wa.me/59893434294?text=Hola,%20quisiera%20consultar%20sobre%20un%20proyecto%20de%20software%20con%20urudev.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#f0edec] hover:bg-[#e5e2e1] text-[#1c1b1b] font-barlow text-[13px] font-semibold rounded-lg transition-colors"
              >
                <MessageSquareShare className="w-4 h-4 text-[#007b61]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-xl border border-[#c2c6d8]/60 shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-[#aeffe3]/60 text-[#00604b] flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-barlow text-[24px] font-bold text-[#1c1b1b] mb-2">
                  ¡Consulta recibida correctamente!
                </h3>
                <p className="font-barlow text-[16px] text-[#424656] max-w-md mx-auto mb-6">
                  Un ingeniero senior de nuestro equipo revisará los detalles de su
                  necesidad y le contactará en menos de 24 horas hábiles con una propuesta formal.
                </p>
                <button
                  onClick={handleResetForm}
                  type="button"
                  className="px-6 py-2.5 rounded-lg border border-[#c2c6d8] text-[#1c1b1b] font-barlow text-[14px] font-semibold hover:bg-[#f6f3f2]"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block font-barlow text-[14px] font-semibold text-[#1c1b1b] mb-2"
                      htmlFor="name"
                    >
                      Nombre completo
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] bg-[#fcf9f8] text-[#1c1b1b] font-barlow text-[15px] focus:outline-none focus:border-[#005ff9] focus:bg-white transition-colors"
                      id="name"
                      placeholder="Ej: Martín Rodríguez"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-barlow text-[14px] font-semibold text-[#1c1b1b] mb-2"
                      htmlFor="email"
                    >
                      Email corporativo
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] bg-[#fcf9f8] text-[#1c1b1b] font-barlow text-[15px] focus:outline-none focus:border-[#005ff9] focus:bg-white transition-colors"
                      id="email"
                      placeholder="martin@empresa.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-barlow text-[14px] font-semibold text-[#1c1b1b] mb-2"
                    htmlFor="phone"
                  >
                    Teléfono o WhatsApp
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] bg-[#fcf9f8] text-[#1c1b1b] font-barlow text-[15px] focus:outline-none focus:border-[#005ff9] focus:bg-white transition-colors"
                    id="phone"
                    placeholder="+598 99 000 000"
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="block font-barlow text-[14px] font-semibold text-[#1c1b1b]"
                      htmlFor="message"
                    >
                      Mensaje o necesidad breve
                    </label>
                    {prefilledMessage && (
                      <span className="font-mono-tech text-[11px] text-[#0049c5] bg-[#dbe1ff] px-2 py-0.5 rounded">
                        Alcance importado del Estimador
                      </span>
                    )}
                  </div>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] bg-[#fcf9f8] text-[#1c1b1b] font-barlow text-[15px] focus:outline-none focus:border-[#005ff9] focus:bg-white transition-colors resize-none"
                    id="message"
                    placeholder="Describa brevemente su requerimiento, tiempos esperados o metas de su empresa..."
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#005ff9] text-white font-barlow text-[16px] font-semibold px-8 py-4 rounded-lg hover:bg-[#0047ba] transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer disabled:opacity-70"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Consulta Comercial'}</span>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                </button>

                <p className="font-mono-tech text-[12px] text-center text-[#737687]">
                  Sus datos están resguardados bajo estricto acuerdo de confidencialidad y secreto
                  industrial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
