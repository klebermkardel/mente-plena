import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-sage-300 flex items-center justify-center group-hover:bg-sage-400 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2C5.8 2 4 3.8 4 6c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4z" fill="white" opacity="0.9"/>
              <rect x="6" y="11" width="4" height="1.5" rx="0.75" fill="white" opacity="0.7"/>
              <rect x="6.5" y="12.5" width="3" height="1.5" rx="0.75" fill="white" opacity="0.5"/>
            </svg>
          </div>
          <span className="font-display text-xl text-sage-800 tracking-wide">Mente Plena</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-sage-700 hover:text-sage-500 transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="ml-2 px-5 py-2 bg-sage-500 text-white text-sm rounded-full hover:bg-sage-600 transition-colors font-body tracking-wide"
          >
            Agendar consulta
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-sage-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-sage-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-sage-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col gap-1 px-6 pb-4 pt-2 bg-cream-50/98 backdrop-blur-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-sage-700 font-body text-sm border-b border-cream-200 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-3 px-5 py-2.5 bg-sage-500 text-white text-sm rounded-full text-center font-body"
          >
            Agendar consulta
          </a>
        </nav>
      </div>
    </header>
  )
}