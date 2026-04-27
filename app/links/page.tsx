const COURSE_URL = 'https://pay.hotmart.com/J105182852H?bid=1777318613086'
const LANDING_URL = 'https://elpoderdelvfx.jlmotionvfx.com'

const links = [
  {
    image: '/links/elpoder.png',
    alt: 'El Poder del VFX — Guía de carrera',
    href: LANDING_URL,
  },
  {
    image: '/links/vfx.png',
    alt: 'VFX — Comprar el curso',
    href: COURSE_URL,
  },
  {
    image: '/links/motion.png',
    alt: 'Motion Graphics',
    href: LANDING_URL,
  },
]

export default function Links() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-4 py-10"
      style={{ background: '#0a0a0a' }}
    >
      {/* Logo */}
      <img
        src="/image/LOGO.png"
        alt="El Poder del VFX"
        className="mb-8"
        style={{ maxHeight: '80px', objectFit: 'contain', filter: 'invert(1) brightness(1.1)' }}
      />

      {/* Link cards */}
      <div className="w-full max-w-lg flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link.href + link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ boxShadow: '0 0 0 1px rgba(230,48,34,0.3)' }}
          >
            <img
              src={link.image}
              alt={link.alt}
              className="w-full h-auto block"
              draggable={false}
            />
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
        © El Poder del VFX
      </p>
    </main>
  )
}
