const sharedColor = '#60a5fa'
const sharedBorder = 'rgba(96,165,250,0.4)'
const sharedBg = 'rgba(96,165,250,0.05)'

const bonuses = [
  {
    tag: 'BONUS 1',
    title: 'Pack HUDs Editables',
    desc: 'Hologramas y HUDs listos para usar en After Effects — y totalmente editables. Usados en producciones reales de publicidad y motion graphics.',
    value: 'Incluido gratis',
    image: '/bonus/PACK HUDS.jpg',
    color: sharedColor,
    borderColor: sharedBorder,
    bgColor: sharedBg,
  },
  {
    tag: 'BONUS 2',
    title: 'Pack Tormenta VFX',
    desc: 'Lluvia, tormentas, rayos y efectos atmosféricos listos para composición. Ahorra horas de render y añade producción a cualquier escena.',
    value: 'Incluido gratis',
    image: '/bonus/PACK TORMENTA.jpg',
    color: sharedColor,
    borderColor: sharedBorder,
    bgColor: sharedBg,
  },
  {
    tag: 'BONUS 3',
    title: 'Pack Essentials VFX',
    desc: 'Explosiones, disparos, fuego, vidrios rotos y mucho más. El pack de efectos que todo VFX artist necesita tener a mano.',
    value: 'Incluido gratis',
    image: '/bonus/PACK ESSENTIALS.jpg',
    color: sharedColor,
    borderColor: sharedBorder,
    bgColor: sharedBg,
  },
  {
    tag: 'BONUS 4',
    title: 'Pack Risers',
    desc: 'Efectos de sonido Sci-Fi y Cyberpunk para dar vida sonora a tus VFX. El audio marca la diferencia entre un efecto amateur y uno profesional.',
    value: 'Incluido gratis',
    image: '/bonus/PACK RISERS.jpg',
    color: sharedColor,
    borderColor: sharedBorder,
    bgColor: sharedBg,
  },
  {
    tag: 'BONUS 5',
    title: 'Pack Ambiences',
    desc: 'Sonidos de ambiente para cualquier escena — naturaleza, ciudad, interiores. El detalle que hace que tu composición se sienta real.',
    value: 'Incluido gratis',
    image: '/bonus/PACK AMBIENCE.jpg',
    color: sharedColor,
    borderColor: sharedBorder,
    bgColor: sharedBg,
  },
]

export default function Bonuses() {
  return (
    <section className="relative py-24" style={{ background: '#111111' }}>
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Todo incluido en el curso</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          5 packs de recursos que normalmente{' '}
          <span className="text-brand-400 text-glow-sm">se venden por separado</span>
        </h2>
        <p className="text-gray-500 text-base mb-12 max-w-xl mx-auto">
          Assets profesionales listos para usar en tus proyectos — incluidos sin coste adicional.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {bonuses.map((b) => (
            <div
              key={b.tag}
              className="card-hover border rounded-lg text-left flex flex-col overflow-hidden"
              style={{ background: b.bgColor, borderColor: b.borderColor }}
            >
              {/* Image */}
              <div className="w-full overflow-hidden" style={{ background: '#000' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full object-cover"
                  style={{ maxHeight: '180px', objectPosition: 'top' }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' }}
                >
                  BONUS EXCLUSIVO
                </span>
                <span className="text-xs font-semibold" style={{ color: b.color }}>{b.tag}</span>
              </div>
              <h3 className="font-bold text-white text-base mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{b.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold" style={{ color: b.color }}>
                <span className="w-3 h-0.5" style={{ background: b.color }} />
                {b.value}
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3 mt-14">
          <a
            href="#precio"
            className="relative overflow-hidden btn-shine inline-flex items-center gap-3 px-8 py-4 font-bold text-lg text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl"
            style={{
              background: '#FFFFFF',
              boxShadow: '0 4px 30px rgba(255,255,255,0.15)',
            }}
          >
            Ver todo lo incluido →
          </a>
          <p className="text-gray-600 text-xs">Pago único · Acceso inmediato · Garantía 15 días</p>
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
