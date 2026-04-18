const befores = [
  'No tienes claro en qué segmento del audiovisual enfocarte',
  'Aprendes trucos sueltos en YouTube sin un flujo completo',
  'Tus efectos se ven de práctica, no de producción real',
  'No tienes proyectos concretos que mostrar en tu portfolio',
  'Dependes de tutoriales porque no tienes un método propio',
]

const afters = [
  'Tienes claridad sobre el mercado y sabes exactamente dónde encaja tu perfil',
  'Dominas un flujo completo de trabajo en After Effects y Blender',
  'Tus VFX pasan el filtro de una producción audiovisual real',
  'Tu portfolio tiene 2 proyectos prácticos terminados y listos para mostrar',
  'Tienes una base sólida para enfrentarte a cualquier proyecto nuevo',
]

export default function Transformation() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#111111' }}>
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[600px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, rgba(230,48,34,0.6) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">La transformación</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-center">
          De cero absoluto a{' '}
          <span className="text-brand-400 text-glow-sm">profesionales que triunfan</span>
        </h2>
        <p className="text-gray-500 text-base mb-14 max-w-xl mx-auto text-center">
          Este es el antes y el después que viven los alumnos que completan el curso.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before */}
          <div
            className="p-8 border rounded-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(239,68,68,0.04), rgba(239,68,68,0.02))',
              borderColor: 'rgba(239,68,68,0.15)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-red-400 font-black text-sm"
                style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}
              >
                ✕
              </div>
              <h3 className="text-red-400 font-bold text-base">Antes del curso</h3>
            </div>
            <ul className="space-y-4">
              {befores.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-500 text-sm leading-snug">
                  <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="p-8 border rounded-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(230,48,34,0.07), rgba(230,48,34,0.03))',
              borderColor: 'rgba(230,48,34,0.28)',
              boxShadow: '0 0 40px rgba(230,48,34,0.08)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-brand-400 font-black text-sm"
                style={{ background: 'rgba(230,48,34,0.1)', border: '1px solid rgba(230,48,34,0.3)' }}
              >
                ✓
              </div>
              <h3 className="text-brand-400 font-bold text-base">Después del curso</h3>
            </div>
            <ul className="space-y-4">
              {afters.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300 text-sm leading-snug">
                  <span className="text-brand-400 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 text-base mt-10">
          Si te reconoces en alguno de estos puntos —{' '}
          <span className="text-gray-300 font-semibold">este curso fue construido exactamente para ti.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <a
            href="#precio"
            className="relative overflow-hidden btn-shine inline-flex items-center gap-3 px-8 py-4 font-bold text-lg text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl"
            style={{
              background: '#FFFFFF',
              boxShadow: '0 4px 30px rgba(255,255,255,0.15)',
            }}
          >
            Quiero empezar →
          </a>
          <p className="text-gray-600 text-xs">Acceso inmediato · Garantía 15 días</p>
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
