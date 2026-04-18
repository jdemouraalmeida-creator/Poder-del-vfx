export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#000000' }}>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(230,48,34,0.08) 0%, transparent 70%)' }}
      />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(230,48,34,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(230,48,34,0.2) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 py-24 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-black/50 text-brand-400 text-xs font-sans backdrop-blur mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shrink-0" />
          GUÍA DE CARRERA · MERCADO AUDIOVISUAL
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-white mb-6">
          Llevas tiempo queriendo vivir del audiovisual.{' '}
          <span style={{ color: '#E63022' }}>
            Esto es lo que nadie te contó.
          </span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mx-auto max-w-2xl mb-8">
          Sabes usar el software. Pero los clientes no llegan, no tienes claro qué mercado trabajar, y nadie te explica cómo funciona esto de verdad. Eso cambia aquí.
        </p>

        <div className="flex flex-col items-center gap-2 mb-10">
          {[
            'Entiende qué mercado te conviene y qué software realmente necesitas aprender',
            'Aprende a conseguir clientes desde el primer día — sin depender de la suerte',
            'Conoce los errores reales del instructor para no repetirlos tú',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-gray-400">
              <span style={{ color: '#E63022' }} className="shrink-0 text-base">›</span>
              {item}
            </div>
          ))}
        </div>

        <a
          href="#precio"
          className="relative overflow-hidden btn-shine inline-flex items-center justify-center gap-3 px-10 py-5 font-bold text-xl text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl mb-4"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 4px 30px rgba(255,255,255,0.15)',
          }}
        >
          Empezar ahora — 10€ →
        </a>

        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm">
          <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Garantía 15 días · Pago seguro via Hotmart
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700 animate-bounce z-10">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
