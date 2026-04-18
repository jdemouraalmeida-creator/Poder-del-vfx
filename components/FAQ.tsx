'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿Necesito experiencia previa con After Effects o Blender?',
    a: 'No. El curso está diseñado para que puedas empezar desde cero. Se explica todo paso a paso, sin asumir conocimiento previo de ninguna de las dos herramientas.',
  },
  {
    q: '¿En qué se diferencia este curso de los tutoriales de YouTube?',
    a: 'YouTube da piezas sueltas. Este curso da un método y dos proyectos completos. Cuando terminas, no tienes una lista de trucos — tienes proyectos reales terminados y la capacidad de enfrentarte a nuevos proyectos con confianza.',
  },
  {
    q: '¿Por cuánto tiempo tengo acceso al curso?',
    a: 'Pagas una vez y el acceso es tuyo.',
  },
  {
    q: '¿Qué versiones de After Effects y Blender necesito?',
    a: 'Las versiones recientes funcionan perfectamente. Blender es completamente gratuito. After Effects forma parte de Adobe Creative Cloud — puedes empezar con la versión de prueba gratuita de 7 días.',
  },
  {
    q: '¿Cómo accedo al curso después de la compra?',
    a: 'Recibirás un email de Hotmart inmediatamente después de la compra con tus credenciales de acceso. El acceso es instantáneo.',
  },
  {
    q: '¿El curso está en español de España?',
    a: 'Sí. Todo el contenido está en español para el mercado español.',
  },
  {
    q: '¿Cómo funciona la garantía de 15 días?',
    a: 'Si en los primeros 15 días no estás satisfecho, escribes un email solicitando la devolución y se te reembolsa el 100% sin preguntas ni condiciones ocultas.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-24" style={{ background: '#111111' }}>
      <div className="section-divider mb-16" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">FAQ</span>
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-14 leading-tight">
          Preguntas{' '}
          <span className="text-brand-400 text-glow-sm">frecuentes</span>
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-sm overflow-hidden transition-all duration-300"
              style={{
                borderColor: open === i ? 'rgba(230,48,34,0.35)' : 'rgba(230,48,34,0.1)',
                background: open === i ? 'linear-gradient(135deg, #141010, #180d0d)' : '#111111',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="text-white font-semibold text-base pr-4 group-hover:text-brand-300 transition-colors">
                  {faq.q}
                </span>
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: open === i ? 'rgba(230,48,34,0.18)' : 'rgba(230,48,34,0.06)',
                    border: '1px solid rgba(230,48,34,0.2)',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg className="w-3.5 h-3.5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {open === i && (
                <div className="px-5 pb-5">
                  <div className="h-px mb-4" style={{ background: 'rgba(230,48,34,0.1)' }} />
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
