export default function Guarantee() {
  return (
    <section className="relative py-20" style={{ background: '#0A0A0A' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Shield icon */}
        <div className="flex justify-center mb-8">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(230,48,34,0.12) 0%, transparent 70%)',
              border: '2px solid rgba(230,48,34,0.35)',
              boxShadow: '0 0 40px rgba(230,48,34,0.25)',
            }}
          >
            <svg className="w-12 h-12 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-sans mb-6"
          style={{ borderColor: 'rgba(230,48,34,0.3)', background: 'rgba(230,48,34,0.08)', color: '#f87171' }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          GARANTÍA 15 DÍAS — RIESGO CERO
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
          El riesgo es mío.{' '}
          <span className="text-brand-400 text-glow-sm">La decisión es tuya.</span>
        </h2>

        <p className="text-gray-400 text-base leading-relaxed max-w-xl mx-auto mb-4">
          Tienes 15 días desde la compra para probar el curso. Entra, mira las clases, sigue los proyectos.
        </p>

        <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-4">
          Si en algún momento sientes que esto no es lo que buscabas — me escribes un email y te devuelvo cada céntimo. Sin formularios, sin justificaciones, sin esperas.
        </p>

        <p className="text-white font-semibold text-base leading-relaxed max-w-xl mx-auto mb-4">
          Un email es suficiente.
        </p>

        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          ¿Por qué ofrezco esto? Porque confío en lo que enseño. Y si el método no te convence en 15 días — no mereces pagar por él.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {[
            { icon: '✓', text: 'Acceso inmediato' },
            { icon: '✓', text: '15 días de garantía total' },
            { icon: '✓', text: 'Reembolso sin preguntas' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-green-500 font-bold">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
