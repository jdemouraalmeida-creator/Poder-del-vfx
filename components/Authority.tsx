import Image from 'next/image'

export default function Authority() {
  return (
    <section className="relative py-24" style={{ background: '#000000' }}>
      <div className="section-divider mb-16" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm tracking-widest font-semibold">Tu Instructor</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start text-center lg:text-left">
          {/* Left: Photo */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -inset-2 rounded-xl opacity-30 animate-glow-pulse"
                style={{ background: 'radial-gradient(circle, rgba(230,48,34,0.4) 0%, transparent 70%)' }}
              />
              <div
                className="relative rounded-xl overflow-hidden w-full"
                style={{
                  border: '1px solid rgba(230,48,34,0.3)',
                  boxShadow: '0 0 40px rgba(230,48,34,0.2)',
                }}
              >
                <Image
                  src="/image/IMG_2667.png"
                  alt="Instructor — El Poder del VFX"
                  width={480}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #E63022, #FF6B5B)',
                  boxShadow: '0 0 20px rgba(230,48,34,0.5)',
                }}
              >
                VFX Artist · +5 años de experiencia
              </div>
            </div>

            {/* Stats */}
            <div className="text-center lg:text-left mt-4">
              <h3 className="font-display text-4xl font-bold text-white mb-5">
                João Lázaro
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { value: '+5 años', label: 'en el mercado audiovisual' },
                  { value: 'After Effects + Blender', label: 'especialidad principal' },
                  { value: 'Publicidad & Redes', label: 'mercado de trabajo' },
                ].map((s) => (
                  <div
                    key={s.value}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{
                      background: 'rgba(230,48,34,0.06)',
                      border: '1px solid rgba(230,48,34,0.18)',
                    }}
                  >
                    <div>
                      <div className="text-xs font-black text-brand-400 leading-none">{s.value}</div>
                      <div className="text-xs text-gray-600 mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Más de 5 años en el mercado.{' '}
                <span style={{ color: '#E63022' }}>Los errores ya los cometí yo.</span>
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  Llevo más de 5 años trabajando en el mercado audiovisual. He pasado por los buenos momentos — y también por los malos. He cometido errores, he aprendido de ellos, y he encontrado el camino.
                </p>
                <p>
                  En este curso no vas a encontrar teoría vacía ni promesas exageradas. Lo que vas a encontrar son los consejos e instrucciones reales que me hubiera gustado tener cuando empecé — los que hacen que tu camino como artista audiovisual sea mucho más suave y tranquilo.
                </p>
                <p>
                  <strong className="text-white">No tienes que aprender todo a base de golpes. Yo ya los di por ti.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 mt-14">
          <a
            href="#precio"
            className="relative overflow-hidden btn-shine inline-flex items-center gap-3 px-8 py-4 font-bold text-lg text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95 rounded-2xl"
            style={{
              background: '#FFFFFF',
              boxShadow: '0 4px 30px rgba(255,255,255,0.15)',
            }}
          >
            Acceder al curso →
          </a>
          <p className="text-gray-600 text-xs">Aprende con João · 10€ · Garantía 15 días</p>
        </div>
      </div>

      <div className="section-divider mt-16" />
    </section>
  )
}
