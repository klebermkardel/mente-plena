import { useEffect, useRef } from 'react'

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => {
              el.classList.remove('opacity-0', 'translate-y-6')
              el.classList.add('opacity-100', 'translate-y-0')
            }, i * 120)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

const valores = [
  {
    icon: '🌱',
    title: 'Acolhimento',
    desc: 'Um ambiente sem julgamentos onde você pode se expressar livremente.',
  },
  {
    icon: '🔬',
    title: 'Evidência científica',
    desc: 'Abordagens terapêuticas baseadas em pesquisa e comprovadas clinicamente.',
  },
  {
    icon: '🌿',
    title: 'Cuidado integral',
    desc: 'Olhamos para você como um todo: mente, corpo e contexto de vida.',
  },
]

export default function Sobre() {
  const ref = useScrollReveal()

  return (
    <section id="sobre" ref={ref} className="py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Esquerda — visual */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-sage-100 to-sage-200 aspect-square max-w-md overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                <circle cx="200" cy="200" r="160" fill="white" opacity="0.15"/>
                <path d="M80 120 Q200 60 320 120 Q260 220 200 280 Q140 220 80 120Z" fill="white" opacity="0.08"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 rounded-full bg-sage-300 mx-auto flex items-center justify-center text-5xl">🧠</div>
                  <div className="font-display text-2xl text-sage-800 font-light">Saúde mental é saúde</div>
                  <div className="w-12 h-0.5 bg-sage-400 mx-auto" />
                  <p className="font-body text-sm text-sage-600 leading-relaxed">
                    Buscar ajuda psicológica é um ato de coragem e autocuidado.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-warm-100 border border-warm-200 rounded-2xl px-5 py-3">
              <div className="font-display text-3xl text-warm-600">15+</div>
              <div className="font-body text-xs text-warm-500">Especialidades atendidas</div>
            </div>
          </div>

          {/* Direita — texto */}
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="font-body text-xs tracking-widest uppercase text-sage-500">Nossa história</span>
              <h2 className="font-display text-4xl md:text-5xl text-sage-900 leading-tight mt-3 font-light">
                Um lugar seguro para florescer
              </h2>
            </div>

            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-sage-600 leading-relaxed font-light text-lg">
              A Mente Plena nasceu da crença de que todo ser humano merece acesso a cuidado psicológico de qualidade. Desde 2016, oferecemos atendimento presencial e online com uma equipe de psicólogos especializados e comprometidos com o seu bem-estar.
            </p>

            <p className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-sage-500 leading-relaxed font-light">
              Trabalhamos com Terapia Cognitivo-Comportamental, Psicanálise, Terapia Sistêmica e outras abordagens, sempre adaptando o tratamento às necessidades únicas de cada pessoa.
            </p>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 space-y-4">
              {valores.map((v) => (
                <div key={v.title} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-sage-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-xl flex-shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <div className="font-body font-medium text-sage-800 text-sm">{v.title}</div>
                    <div className="font-body text-sage-500 text-sm leading-relaxed mt-0.5 font-light">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}