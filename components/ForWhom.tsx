// Blair Warren: validar identidade — "este és tu"
const profiles = [
  {
    text: 'Quieres trabajar con VFX o edición pero no tienes claro en qué mercado enfocarte ni qué software aprender primero.',
  },
  {
    text: 'Llevas tiempo aprendiendo por tutoriales sueltos pero sientes que falta algo — un método, una visión, un norte real.',
  },
  {
    text: 'Quieres trabajar como autónomo en el audiovisual pero nadie te ha explicado cómo funciona la parte de negocio: clientes, precios, impuestos.',
  },
  {
    text: 'Tienes talento pero no sabes cómo convertirlo en trabajo real — y no quieres aprender a base de golpes.',
  },
]

export default function ForWhom() {
  return (
    <section className="relative py-20" style={{ background: '#050505' }}>
      <div className="section-divider mb-14" />

      <div className="max-w-6xl mx-auto px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-brand-500" />
          <span className="text-brand-400 font-sans text-sm uppercase tracking-widest font-semibold">Esta guía es para ti si...</span>
          <div className="w-8 h-0.5 bg-brand-500" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="p-5 border rounded-lg"
              style={{ background: '#0A0A0A', borderColor: 'rgba(230,48,34,0.1)' }}
            >
              <p className="text-gray-400 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-base mt-10">
          Si te reconoces en alguno de estos puntos —{' '}
          <span className="text-gray-200 font-semibold">esta guía fue construida exactamente para ti.</span>
        </p>
      </div>

      <div className="section-divider mt-14" />
    </section>
  )
}
