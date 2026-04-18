const included = [
  '6 lecciones sobre el mercado audiovisual',
  'Proyecto práctico completo — After Effects',
  'Proyecto práctico completo — Blender (Realidad Aumentada)',
  'BONUS: Pack HUDs Editables (hologramas)',
  'BONUS: Pack Tormenta VFX',
  'BONUS: Pack Essentials VFX',
  'BONUS: 151 Efectos de sonido Sci-Fi / Cyberpunk',
  'BONUS: Pack Ambiences Sound Effects',
]

export default function Pricing() {
  return (
    <section id="precio" className="relative py-24 overflow-hidden" style={{ background: '#111111' }}>
      {/* Top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #E63022, #FF6B5B, #E63022, transparent)' }}
      />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(230,48,34,0.5) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Tu inversión</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-center">
          Acceso completo por un único pago de{' '}
          <span className="text-brand-400 text-glow-sm">10€</span>
        </h2>
        <p className="text-gray-400 text-base mb-12 text-center max-w-xl mx-auto">
          Pago único — 
        </p>

        {/* Pricing card */}
        <div
          className="relative p-8 lg:p-12 border rounded-sm overflow-hidden"
          style={{
            borderColor: 'rgba(230,48,34,0.4)',
            background: 'linear-gradient(135deg, #111111, #160c0c)',
            boxShadow: '0 0 60px rgba(230,48,34,0.18), 0 0 120px rgba(230,48,34,0.08)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-500/50" />

          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs text-white"
              style={{
                background: 'linear-gradient(135deg, #E63022, #FF6B5B)',
                boxShadow: '0 0 30px rgba(230,48,34,0.6), 0 0 60px rgba(230,48,34,0.2)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              ACCESO INMEDIATO · PAGO ÚNICO · SIN RENOVACIONES
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Price */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm mb-1">Precio único</p>
              <p
                className="font-display text-8xl lg:text-9xl font-bold mb-2 text-glow leading-none"
                style={{ color: '#FFFFFF' }}
              >
                10€
              </p>
              <p className="text-gray-600 text-xs mb-6">Más IVA</p>

              {/* Main CTA */}
              <a
                href="https://pay.hotmart.com/J105182852H?off=pcom3in6&checkoutMode=10"
                className="relative overflow-hidden btn-shine block w-full text-center px-8 py-5 font-black text-xl text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 mb-4 rounded-2xl"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 0 40px rgba(230,48,34,0.5), 0 0 80px rgba(230,48,34,0.18)',
                }}
              >
                Empezar ahora — 10€ →
              </a>

              <p className="text-gray-600 text-xs text-center">
                Pago 100% seguro via Hotmart · Acceso inmediato · Garantía 15 días
              </p>
            </div>

            {/* Right: Included */}
            <div>
              <p className="text-white font-bold mb-5 text-sm">Todo lo que obtienes:</p>
              <ul className="space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                      style={item.startsWith('BONUS')
                        ? { background: 'rgba(255,107,91,0.1)', borderColor: 'rgba(255,107,91,0.35)' }
                        : { background: 'rgba(230,48,34,0.1)', borderColor: 'rgba(230,48,34,0.3)' }}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color: item.startsWith('BONUS') ? '#FF6B5B' : '#E63022' }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className="text-sm leading-snug"
                      style={{ color: item.startsWith('BONUS') ? '#FF6B5B' : '#d1d5db' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
