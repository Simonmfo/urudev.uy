import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Building2, Check, ArrowRight, User, Mail, Phone } from 'lucide-react';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onClose }) => {
  const [meetingType, setMeetingType] = useState<'video' | 'in_person'>('video');
  const [selectedDate, setSelectedDate] = useState('2026-09-29'); // Tuesday
  const [selectedSlot, setSelectedSlot] = useState('10:30');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const availableDates = [
    { date: '2026-09-29', label: 'Mar 29 Sep', day: 'Martes' },
    { date: '2026-09-30', label: 'Mié 30 Sep', day: 'Miércoles' },
    { date: '2026-10-01', label: 'Jue 01 Oct', day: 'Jueves' },
    { date: '2026-10-02', label: 'Vie 02 Oct', day: 'Viernes' },
  ];

  const slots = ['09:30', '10:30', '11:45', '14:00', '15:30', '17:00'];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl border border-[#c2c6d8] shadow-2xl max-w-xl w-full p-6 sm:p-8 relative max-h-[92vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg text-zinc-500 hover:text-black hover:bg-zinc-100 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-6 text-center animate-in fade-in duration-200">
            <div className="w-16 h-16 rounded-full bg-[#aeffe3]/60 text-[#00604b] flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-barlow text-[24px] font-bold text-[#1c1b1b] mb-1">
              Sesión Agendada con Éxito
            </h3>
            <p className="font-mono-tech text-[13px] text-[#0049c5] mb-4">
              Confirmación enviada a {email}
            </p>

            <div className="p-4 rounded-lg bg-[#f6f3f2] border border-[#e5e2e1] text-left text-[14px] font-barlow space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-[#737687]">Modalidad:</span>
                <span className="font-semibold text-[#1c1b1b]">
                  {meetingType === 'video'
                    ? 'Videollamada Google Meet (15 min)'
                    : 'Reunión Presencial (Paysandú, Uruguay)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737687]">Horario:</span>
                <span className="font-semibold text-[#1c1b1b]">
                  {selectedSlot} hs (GMT-3) · {selectedDate}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#737687]">Ingeniero Asignado:</span>
                <span className="font-semibold text-[#007b61]">
                  Ing. Senior de Soluciones (urudev.uy)
                </span>
              </div>
            </div>

            <p className="font-barlow text-[13px] text-[#424656] mb-6">
              Recibirá la invitación de calendario con el link de la reunión o detalles de ingreso al
              edificio.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#005ff9] hover:bg-[#0047ba] text-white font-barlow text-[15px] font-semibold rounded-lg shadow-xs"
            >
              Listo, cerrar ventana
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[#0049c5] block mb-1">
                ASESORÍA TÉCNICA SIN COSTO
              </span>
              <h3 className="font-barlow text-[24px] sm:text-[26px] font-bold text-[#1c1b1b]">
                Agendar con un Ingeniero Senior
              </h3>
              <p className="font-barlow text-[14px] text-[#424656] mt-1">
                Evaluemos viabilidad de arquitectura, tiempos y presupuesto preliminar en 15 minutos.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-5">
              {/* Meeting Type Selection */}
              <div>
                <label className="block font-barlow text-[13px] font-semibold text-[#1c1b1b] mb-2">
                  Modalidad de Reunión
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMeetingType('video')}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      meetingType === 'video'
                        ? 'border-[#005ff9] bg-[#dbe1ff]/20 text-[#00174b] ring-1 ring-[#005ff9]'
                        : 'border-[#e5e2e1] text-[#424656] hover:bg-[#fafafa]'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#005ff9] shrink-0" />
                    <div>
                      <div className="font-barlow text-[14px] font-bold">Videollamada</div>
                      <div className="text-[11px] font-barlow text-[#737687]">15 min · Google Meet</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMeetingType('in_person')}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border text-left cursor-pointer transition-all ${
                      meetingType === 'in_person'
                        ? 'border-[#005ff9] bg-[#dbe1ff]/20 text-[#00174b] ring-1 ring-[#005ff9]'
                        : 'border-[#e5e2e1] text-[#424656] hover:bg-[#fafafa]'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-[#005ff9] shrink-0" />
                    <div>
                      <div className="font-barlow text-[14px] font-bold">Presencial</div>
                      <div className="text-[11px] font-barlow text-[#737687]">Paysandú, Uruguay</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Date selection */}
              <div>
                <label className="block font-barlow text-[13px] font-semibold text-[#1c1b1b] mb-2">
                  Seleccionar Día
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {availableDates.map((d) => (
                    <button
                      key={d.date}
                      type="button"
                      onClick={() => setSelectedDate(d.date)}
                      className={`p-2 rounded-lg border text-center cursor-pointer transition-all ${
                        selectedDate === d.date
                          ? 'border-[#005ff9] bg-[#005ff9] text-white font-bold'
                          : 'border-[#e5e2e1] bg-white text-[#424656] hover:border-[#c2c6d8]'
                      }`}
                    >
                      <div className="text-[11px] uppercase tracking-wider">{d.day}</div>
                      <div className="text-[13px] font-bold font-mono-tech mt-0.5">{d.label.slice(4)}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time slot selection */}
              <div>
                <label className="block font-barlow text-[13px] font-semibold text-[#1c1b1b] mb-2">
                  Horario Disponible (GMT-3)
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {slots.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSlot(s)}
                      className={`py-2 rounded-lg border text-center font-mono-tech text-[13px] cursor-pointer transition-all ${
                        selectedSlot === s
                          ? 'border-[#005ff9] bg-[#dbe1ff] text-[#00174b] font-bold'
                          : 'border-[#e5e2e1] bg-white text-[#424656] hover:border-[#c2c6d8]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact info inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block font-barlow text-[12px] font-semibold text-[#1c1b1b] mb-1">
                    Su Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Martín Rodríguez"
                    className="w-full px-3 py-2 text-[14px] rounded-lg border border-[#c2c6d8] focus:border-[#005ff9] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-barlow text-[12px] font-semibold text-[#1c1b1b] mb-1">
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="martin@empresa.com"
                    className="w-full px-3 py-2 text-[14px] rounded-lg border border-[#c2c6d8] focus:border-[#005ff9] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-barlow text-[12px] font-semibold text-[#1c1b1b] mb-1">
                    Empresa u Organización
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Empresa S.A."
                    className="w-full px-3 py-2 text-[14px] rounded-lg border border-[#c2c6d8] focus:border-[#005ff9] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-barlow text-[12px] font-semibold text-[#1c1b1b] mb-1">
                    Teléfono / Celular
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+598 99 000 000"
                    className="w-full px-3 py-2 text-[14px] rounded-lg border border-[#c2c6d8] focus:border-[#005ff9] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-barlow text-[12px] font-semibold text-[#1c1b1b] mb-1">
                  Tema o proyecto a tratar (opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: Nuevo portal B2B, integración con SAP/DGI, o cotización de ERP a medida..."
                  className="w-full px-3 py-2 text-[13px] rounded-lg border border-[#c2c6d8] focus:border-[#005ff9] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#005ff9] hover:bg-[#0047ba] text-white font-barlow text-[15px] font-semibold px-6 py-3.5 rounded-lg shadow-xs hover:shadow-md cursor-pointer"
              >
                <span>Confirmar Reserva de Asesoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
