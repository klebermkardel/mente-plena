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
            }, i * 150)
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

const depoimentos = [
  {
    texto: "Encontrei na Mente Plena um porto seguro. A Dra. Ana me ajudou a redescobrir ferramentas internas que eu nem sabia que possuía.",
    autor: "Fernanda S.",
    contexto: "Paciente há 1 ano"
  },
  {
    texto: "As sessões online facilitaram muito minha rotina. O acolhimento é o mesmo do presencial, com uma ética e cuidado admiráveis.",
    autor: "Marcos V.",
    contexto: "Atendimento Online"
  },
  {
    texto: "Um espaço de cura real. Sinto que finalmente estou no controle da minha ansiedade e vivendo com muito mais leveza.",
    autor: "Juliana R.",
    contexto: "Paciente de Terapia Individual"
  }
]

export default function Depoimentos() {
  const ref = useScrollReveal()

  return (
    <section id="depoimentos" ref={ref} className="py-28 bg-cream-100/50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título Centralizado */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-xs tracking-widest uppercase text-sage-500 font-bold">
            Relatos de quem confia
          </span>
          <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl md:text-5xl text-sage-900 mt-4 font-light">
            Histórias de <em className="text-warm-500 not-italic">transformação</em>
          </h2>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((d, i) => (
            <div 
              key={i} 
              className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white p-10 rounded-[2.5rem] relative shadow-sm border border-cream-200 flex flex-col justify-between hover:shadow-xl hover:shadow-sage-100/30 transition-all duration-500"
            >
              {/* Aspas decorativas */}
              <div className="absolute top-6 left-8 text-sage-100 font-display text-7xl leading-none select-none">
                “
              </div>

              <p className="relative z-10 font-body text-sage-700 italic leading-relaxed mb-8">
                {d.texto}
              </p>

              <div>
                <div className="w-10 h-0.5 bg-warm-200 mb-4" />
                <h4 className="font-display text-xl text-sage-900 font-light">{d.autor}</h4>
                <p className="font-body text-[11px] text-sage-400 uppercase tracking-widest font-bold mt-1">
                  {d.contexto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para Ação sutil */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 mt-20 text-center">
          <p className="font-body text-sage-500 text-sm italic">
            Mais de 500 vidas impactadas através do cuidado psicológico humanizado.
          </p>
        </div>
      </div>
    </section>
  )
}