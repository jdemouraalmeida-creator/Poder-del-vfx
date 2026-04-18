const problems = [
  {
    title: 'Sin claridad sobre el mercado',
    desc: 'Sabes que quieres trabajar con VFX pero no tienes claro en qué segmento enfocarte ni qué herramientas realmente importan para ese mercado.',
  },
  {
    title: 'Tutoriales sin método ni flujo',
    desc: 'Llevas horas en YouTube aprendiendo trucos sueltos. Nunca nadie te enseñó un flujo de trabajo completo, de la idea al render final.',
  },
  {
    title: 'After Effects y Blender: pared vertical',
    desc: 'Capas, nodos, tracking, composición — todo al mismo tiempo y sin guía. Cada error son horas perdidas buscando soluciones en foros.',
  },
  {
    title: 'Sin proyectos reales en el portfolio',
    desc: 'No puedes demostrar lo que no has creado. Sin proyectos concretos, tu talento sigue siendo una promesa, no una prueba.',
  },
]

export default function Problem() {
  return (
    <section className="relative py-24" style={{ background: '#0A0A0A' }}>
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">El problema</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          ¿Por qué tantos aspirantes a VFX artist{' '}
          <span className="text-brand-400 text-glow-sm">nunca llegan a crear proyectos reales?</span>
        </h2>
        <p className="text-gray-500 text-lg mb-14 max-w-2xl mx-auto">
          No es falta de talento. Es que nadie les dio orientación ni método.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="card-hover p-6 border rounded-sm"
              style={{
                background: 'linear-gradient(135deg, #111111, #141414)',
                borderColor: 'rgba(230,48,34,0.12)',
              }}
            >
              <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            El problema nunca fue tu talento.{' '}
            <span className="text-white font-semibold">Fue la falta de un camino claro — con método, proyectos reales y las herramientas correctas.</span>
            {' '}Eso termina aquí.
          </p>
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
