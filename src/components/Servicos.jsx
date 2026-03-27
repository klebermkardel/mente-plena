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
            }, i * 100)
          });
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

const servicos = [
  {
    title: 'Psicoterapia Individual',
    desc: 'Um processo profundo de autoconhecimento para lidar com ansiedade, depressão e conflitos internos.',
    icon: '👤',
    tag: 'Presencial e Online'
  },
  {
    title: 'Terapia de Casal',
    desc: 'Mediação profissional para fortalecer a comunicação e reconstruir os laços da relação.',
    icon: '👥',
    tag: 'Foco em Vínculos'
  },
  {
    title: 'Terapia Infantil',
    desc: 'Abordagem lúdica e acolhedora para auxiliar no desenvolvimento emocional das crianças.',
    icon: '🧸',
    tag: 'Atendimento Lúdico'
  },
  {
    title: 'Orientação Profissional',
    desc: 'Suporte estratégico para momentos de transição de carreira ou descobertas de propósito.',
    icon: '🎯',
    tag: 'Carreira'
  }
]

export default function Servicos() {
  const ref = useScrollReveal()

  return (
    <section id="servicos" ref={ref} className="py-28 bg-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-xs tracking-widest uppercase text-sage-500 font-bold">
            Como posso te ajudar
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl md:text-5xl text-sage-900 mt-4 font-light leading-tight">
            Caminhos para o seu <em className="text-warm-500 not-italic">equilíbrio</em>
          </h2>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 w-16 h-0.5 bg-warm-200 mx-auto mt-6" />
        </div>

        {/* Grid de Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((s) => (
            <div 
              key={s.title}
              className="reveal opacity-0 translate-y-6 transition-all duration-700 group p-8 rounded-[2rem] bg-white border border-cream-200 hover:border-sage-200 hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-sage-50 flex items-center justify-center text-3xl mb-6 group-hover:bg-sage-100 transition-colors duration-500">
                {s.icon}
              </div>
              
              <span className="font-body text-[10px] uppercase tracking-[0.15em] text-sage-400 font-bold mb-3">
                {s.tag}
              </span>
              
              <h3 className="font-display text-2xl text-sage-800 mb-4 font-light leading-tight">
                {s.title}
              </h3>
              
              <p className="font-body text-sage-600 text-sm leading-relaxed font-light mb-8 flex-grow">
                {s.desc}
              </p>

              <a 
                href="#contato" 
                className="font-body text-xs text-sage-500 font-bold border-b-2 border-cream-100 pb-1 w-fit hover:text-warm-500 hover:border-warm-200 transition-all duration-300"
              >
                SAIBA MAIS
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}