export default function FinalCTA() {
  return (
    <>
      <section className="relative py-24 overflow-hidden" style={{ background: '#0A0A0A' }}>
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[800px] h-[500px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(ellipse, rgba(230,48,34,0.7) 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-sans font-semibold mb-6"
            style={{ borderColor: 'rgba(230,48,34,0.3)', background: 'rgba(230,48,34,0.08)', color: '#f87171' }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Es el momento
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Empieza a crear{' '}
            <span className="text-brand-400 text-glow">efectos visuales reales</span>
          </h2>

          <p className="text-gray-400 text-lg mb-3 max-w-xl mx-auto leading-relaxed">
            Todo el contenido, los 2 proyectos prácticos y los 5 packs de recursos — por un único pago de <strong className="text-white">10€</strong>.
          </p>

          <p className="text-gray-600 text-base mb-10 max-w-md mx-auto">
            La semana que viene, la mayoría seguirá buscando tutoriales sueltos en YouTube. Tú puedes tomar una decisión diferente ahora.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://pay.hotmart.com/J105182852H?off=pcom3in6&checkoutMode=10"
              className="relative overflow-hidden btn-shine inline-flex items-center gap-3 px-10 py-5 font-black text-xl text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 0 40px rgba(230,48,34,0.55), 0 0 80px rgba(230,48,34,0.2)',
              }}
            >
              Acceder al curso ahora →
            </a>
            <p className="text-gray-600 text-sm">
              Pago seguro via Hotmart · Acceso inmediato · Garantía 15 días sin preguntas
            </p>
          </div>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-gray-600 text-sm"
        style={{ background: '#0A0A0A', borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-2">© 2025 El Poder del VFX — Todos los derechos reservados</p>
          <p className="space-x-4">
            <a href="/politica-de-privacidad" className="hover:text-brand-400 transition-colors">Política de Privacidad</a>
            <span>·</span>
            <a href="/aviso-legal" className="hover:text-brand-400 transition-colors">Aviso Legal</a>
            <span>·</span>
            <a href="mailto:contacto@example.com" className="hover:text-brand-400 transition-colors">Contacto</a>
          </p>
        </div>
      </footer>
    </>
  )
}
