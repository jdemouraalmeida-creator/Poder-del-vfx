const projects = [
  {
    tag: 'BONUS EXCLUSIVO',
    label: 'After Effects',
    title: 'Spot publicitario — Bentley',
    desc: 'Un proyecto completo de principio a fin: motion graphics, composición y VFX al nivel de una producción real. Listo para entrar en tu portfolio desde el primer día.',
    video: '/Videos/pub-bentley.mp4',
    color: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.4)',
    bgColor: 'rgba(96,165,250,0.05)',
    glowColor: 'rgba(96,165,250,0.1)',
  },
  {
    tag: 'BONUS EXCLUSIVO',
    label: 'Blender — Realidad Aumentada',
    title: 'Spot publicitario — Mercadona',
    desc: 'Integra objetos 3D en footage real con Blender. Tracking, iluminación y composición para un spot de realidad aumentada que parece de producción profesional.',
    video: '/Videos/MERCADONAA.mp4',
    color: '#60a5fa',
    borderColor: 'rgba(96,165,250,0.4)',
    bgColor: 'rgba(96,165,250,0.05)',
    glowColor: 'rgba(96,165,250,0.1)',
  },
]

export default function Projects() {
  return (
    <section className="relative py-24" style={{ background: '#0A0A0A' }}>
      <div className="section-divider mb-16" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Incluido en el curso</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          2 proyectos prácticos{' '}
          <span className="text-brand-400 text-glow-sm">que van directo a tu portfolio</span>
        </h2>
        <p className="text-gray-500 text-base mb-14 max-w-xl mx-auto">
          No ejercicios de práctica. Spots reales — el tipo de trabajo que los clientes quieren ver.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card-hover border rounded-lg overflow-hidden text-left"
              style={{
                borderColor: p.borderColor,
                background: p.bgColor,
                boxShadow: `0 0 40px ${p.glowColor}`,
              }}
            >
              {/* Badge */}
              <div className="flex items-center justify-between px-5 pt-5 mb-4">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}
                >
                  {p.tag}
                </span>
                <span className="text-xs font-semibold" style={{ color: p.color }}>{p.label}</span>
              </div>

              {/* Video */}
              <div className="relative mx-auto" style={{ aspectRatio: '9/16', background: '#000', maxWidth: '240px' }}>
                <video
                  src={p.video}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>

                <div
                  className="mt-5 flex items-center gap-2 text-xs font-semibold"
                  style={{ color: p.color }}
                >
                  <span className="w-4 h-0.5" style={{ background: p.color }} />
                  Incluido gratis con el curso
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
