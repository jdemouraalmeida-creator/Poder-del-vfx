const covers = [
  '/projects/Empieza%20aqui.png',
  '/projects/Nuevos%20conocimientos.png',
  '/projects/Nuevos%20conocimientos%202.png',
  '/projects/Networking%20part%201.png',
  '/projects/Networking%20part%202.png',
  '/projects/Oportunidades.png',
  '/projects/Mis%20errores.png',
  '/projects/Impuestos.png',
]

const bonuses = [
  { title: 'Proyecto práctico — After Effects', tag: 'BONUS' },
  { title: 'Proyecto práctico — Blender (Realidad Aumentada)', tag: 'BONUS' },
  { title: 'Pack HUDs Editables (hologramas)', tag: 'BONUS' },
  { title: 'Pack Tormenta VFX', tag: 'BONUS' },
  { title: 'Pack Essentials VFX', tag: 'BONUS' },
  { title: 'Pack Risers', tag: 'BONUS' },
  { title: 'Pack Ambiences Sound Effects', tag: 'BONUS' },
]

export default function WhatYouGet() {
  return (
    <section id="precio" className="relative py-20" style={{ background: '#000000' }}>
      <div className="max-w-6xl mx-auto px-10 text-center">

        {/* Course content */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Lo que incluye la guía</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-10">
          6 temas que cambian{' '}
          <span style={{ color: '#E63022' }}>cómo ves el mercado</span>
        </h2>

        {/* Carousel */}
        <div className="marquee-track overflow-hidden mb-16 -mx-10 relative">
          <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #000000, transparent)' }} />
          <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #000000, transparent)' }} />
          <div className="flex gap-4 marquee-left" style={{ width: 'max-content' }}>
            {[...covers, ...covers].map((src, i) => (
              <div
                key={i}
                className="shrink-0 rounded-lg overflow-hidden border"
                style={{ width: '220px', borderColor: 'rgba(230,48,34,0.55)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Módulo ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pricing box */}
        <div
          className="relative p-8 lg:p-10 border rounded-lg overflow-hidden"
          style={{
            borderColor: 'rgba(230,48,34,0.4)',
            background: 'linear-gradient(135deg, #111111, #160c0c)',
            boxShadow: '0 0 60px rgba(230,48,34,0.15)',
          }}
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-500/50" />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Price */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold text-xs text-white mb-5"
                style={{
                  background: 'linear-gradient(135deg, #E63022, #FF6B5B)',
                  boxShadow: '0 0 20px rgba(230,48,34,0.5)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                ACCESO INMEDIATO · PAGO ÚNICO
              </div>

              <p
                className="font-display font-bold leading-none mb-1"
                style={{ fontSize: '5.5rem', color: '#FFFFFF' }}
              >
                10€
              </p>
              <p className="text-gray-600 text-xs mb-6">Pago único</p>

              <a
                href="https://pay.hotmart.com/J105182852H?bid=1777318613086"
                className="relative overflow-hidden btn-shine block w-full text-center px-8 py-5 font-black text-xl text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl mb-3"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 4px 30px rgba(255,255,255,0.15)',
                }}
              >
                Empezar ahora — 10€ →
              </a>
              <p className="text-gray-600 text-xs text-center">
                Pago seguro via Hotmart · Garantía 15 días sin preguntas
              </p>
            </div>

            {/* Right: What's included */}
            <div>
              <p className="text-white font-bold text-sm mb-4">Todo lo que obtienes:</p>
              <ul className="space-y-2.5">
                {/* Main content */}
                <li className="flex items-start gap-3">
                  <span className="text-brand-500 mt-0.5 shrink-0">✔</span>
                  <span className="text-gray-300 text-sm">Guía completa — 6 lecciones sobre el mercado audiovisual</span>
                </li>
                {/* Bonuses */}
                {bonuses.map((b) => (
                  <li key={b.title} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-xs font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,107,91,0.12)', color: '#FF6B5B' }}>+</span>
                    <span className="text-sm" style={{ color: '#FF6B5B' }}>{b.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
