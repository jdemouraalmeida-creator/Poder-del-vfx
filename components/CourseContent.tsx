const lessons = [
  {
    num: '01',
    title: 'Claridad Profesional',
    desc: 'Entiende el mercado audiovisual y descubre en qué segmento encaja tu perfil. Cuál es la diferencia entre el mercado de publicidad/redes sociales y el de grandes producciones — y qué herramientas necesita cada uno.',
  },
  {
    num: '02',
    title: 'Oportunidades del Mercado',
    desc: 'Una visión honesta del sector audiovisual actual: agencias, produtoras, marcas y la alta demanda de contenido digital. Qué está creciendo y dónde hay espacio para nuevos profesionales.',
  },
  {
    num: '03',
    title: 'Networking — Parte 1',
    desc: 'Plataformas y métodos reales para construir tu red de contactos. Casos reales de conexiones profesionales conseguidas a través del networking — y cómo replicarlos.',
  },
  {
    num: '04',
    title: 'Networking — Parte 2',
    desc: '"Quien no es visto, no es recordado." Estrategias concretas para conectar con clientes y profesionales del sector audiovisual. Presencia online y visibilidad profesional.',
  },
  {
    num: '05',
    title: 'Nuevos Conocimientos — Parte 1',
    desc: 'Cómo organizarse para aprender de forma continua en un mercado que no para de evolucionar. El método del instructor para mantenerse actualizado.',
  },
  {
    num: '06',
    title: 'Nuevos Conocimientos — Parte 2',
    desc: 'El dominio de múltiples herramientas abre más puertas: 3D, efeitos visuais, motion graphics, diseño gráfico. Seremos eternos alumnos — y eso es una ventaja competitiva.',
  },
]

const projects = [
  {
    badge: 'After Effects',
    title: 'Proyecto VFX Completo',
    desc: 'Crea un proyecto de efectos visuales completo paso a paso. Composición, capas, máscaras, integración de elementos y render profesional.',
    tecnicas: ['Composición y capas', 'Creación y uso de máscaras', 'Integración de HUDs y hologramas', 'Técnicas de composición profesional'],
  },
  {
    badge: 'Blender',
    title: 'Realidad Aumentada',
    desc: 'Integra elementos 3D en una filmación real. Aprende tracking 3D y crea una escena de realidad aumentada desde cero con Blender y After Effects.',
    tecnicas: ['Tracking 3D en Blender y After Effects', 'Integración de elementos 3D en vídeo real', 'Hologramas y efectos AR', 'Render y exportación final'],
  },
]

export default function CourseContent() {
  return (
    <section className="relative py-24" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Lessons */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Contenido del curso</span>
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight max-w-3xl">
          6 lecciones que te dan{' '}
          <span className="text-brand-400 text-glow-sm">visión y mentalidad</span>
        </h2>
        <p className="text-gray-500 text-base mb-12 max-w-xl">
          El mercado audiovisual, cómo posicionarte en él y cómo seguir creciendo.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {lessons.map((l) => (
            <div
              key={l.num}
              className="card-hover p-6 border rounded-sm relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #111111, #141414)',
                borderColor: 'rgba(230,48,34,0.1)',
              }}
            >
              <div
                className="absolute top-4 right-4 font-display text-4xl font-bold leading-none"
                style={{ color: 'rgba(230,48,34,0.1)' }}
              >
                {l.num}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{l.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Práctica real</span>
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight max-w-3xl">
          2 Proyectos{' '}
          <span className="text-brand-400 text-glow-sm">completos</span>
        </h2>
        <p className="text-gray-500 text-base mb-12 max-w-xl">
          Nada de teoría sin aplicación. Construirás dos proyectos reales paso a paso.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="p-8 border rounded-sm relative overflow-hidden"
              style={{
                background: '#111111',
                borderColor: 'rgba(230,48,34,0.2)',
                boxShadow: '0 0 30px rgba(230,48,34,0.06)',
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, var(--red), transparent)' }}
              />
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: 'rgba(230,48,34,0.12)', color: '#FF6B5B' }}
              >
                {p.badge}
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">{p.desc}</p>
              <ul className="space-y-2">
                {p.tecnicas.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="text-brand-500 text-base">›</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
