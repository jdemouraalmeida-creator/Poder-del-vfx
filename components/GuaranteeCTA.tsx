const faqs = [
  {
    q: '¿Es un curso técnico de After Effects o Blender?',
    a: 'No. Es una guía de carrera — aborda la parte de negocio y mentalidad que ningún tutorial técnico te enseña: cómo entender el mercado, conseguir clientes, hacer networking y gestionar tus impuestos como autónomo. Los proyectos prácticos de After Effects y Blender son bonuses incluidos.',
  },
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. La guía está pensada para quien está empezando o quiere reorientar su camino en el audiovisual. No se requiere conocimiento técnico previo.',
  },
  {
    q: '¿Por cuánto tiempo tengo acceso?',
    a: 'Pagas una vez y el acceso es tuyo.',
  },
  {
    q: '¿Cómo accedo tras la compra?',
    a: 'Recibirás un email de Hotmart con acceso inmediato después del pago.',
  },
]

export default function GuaranteeCTA() {
  return (
    <>
      {/* Authority strip */}
      <section className="relative py-16" style={{ background: '#050505' }}>
        <div className="max-w-6xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Guarantee */}
            <div
              className="p-8 border rounded-lg text-center"
              style={{
                background: '#000000',
                borderColor: 'rgba(230,48,34,0.25)',
                boxShadow: '0 0 30px rgba(230,48,34,0.08)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 animate-glow-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(230,48,34,0.12) 0%, transparent 70%)',
                  border: '2px solid rgba(230,48,34,0.3)',
                }}
              >
                <svg className="w-8 h-8 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">Garantía 15 días</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Si en los primeros 15 días sientes que esto no es lo que buscabas — un email y te devuelvo cada céntimo. Sin formularios, sin justificaciones.
              </p>
              <p className="text-white text-sm font-semibold">El riesgo es mío. La decisión es tuya.</p>
            </div>

            {/* FAQ */}
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-lg"
                  style={{ background: '#000000', borderColor: 'rgba(230,48,34,0.1)' }}
                >
                  <p className="text-white font-semibold text-sm mb-2">{faq.q}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#000000' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[700px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, rgba(230,48,34,0.7) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Tu camino en el audiovisual{' '}
            <span style={{ color: '#E63022' }}>empieza aquí.</span>
          </h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            Todo lo que necesitas saber para navegar el mercado audiovisual — por 10€.
          </p>
          <a
            href="https://pay.hotmart.com/J105182852H?off=pcom3in6&checkoutMode=10"
            className="relative overflow-hidden btn-shine inline-flex items-center gap-3 px-10 py-5 font-black text-xl text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl"
            style={{
              background: '#FFFFFF',
              boxShadow: '0 4px 30px rgba(255,255,255,0.15)',
            }}
          >
            Empezar ahora — 10€ →
          </a>
          <p className="text-gray-600 text-sm mt-4">Pago seguro via Hotmart · Acceso inmediato · Garantía 15 días</p>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-gray-600 text-sm"
        style={{ background: '#000000', borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-6xl mx-auto px-10">
          <p className="mb-2">© 2025 El Poder del VFX · João Lázaro · Todos los derechos reservados</p>
          <p className="space-x-4">
            <a href="/politica-de-privacidad" className="hover:text-brand-400 transition-colors">Política de Privacidad</a>
            <span>·</span>
            <a href="/aviso-legal" className="hover:text-brand-400 transition-colors">Aviso Legal</a>
          </p>
        </div>
      </footer>
    </>
  )
}
