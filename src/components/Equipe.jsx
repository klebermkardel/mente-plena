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

const profissionais = [
  {
    nome: 'Dra. Ana Lima',
    funcao: 'Psicóloga Clínica e Fundadora',
    crp: 'CRP 06/123456',
    bio: 'Especialista em Terapia Cognitivo-Comportamental com mais de 8 anos de experiência no acolhimento de adultos e adolescentes.',
    especialidades: ['Ansiedade', 'Depressão', 'Autoestima'],
    imagem: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500' 
  },
  {
    nome: 'Dr. Ricardo Santos',
    funcao: 'Psicólogo Analítico',
    crp: 'CRP 06/654321',
    bio: 'Focado em processos de autoconhecimento profundo e análise de sonhos, auxiliando na ressignificação de traumas.',
    especialidades: ['Psicanálise', 'Luto', 'Relacionamentos'],
    imagem: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400&h=500'
  }
]

export default function Equipe() {
  const ref = useScrollReveal()

  return (
    <section id="equipe" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-xs tracking-widest uppercase text-warm-500 font-bold">
              Nossa Equipe
            </span>
            <h2 className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-4xl md:text-5xl text-sage-900 mt-4 font-light">
              Profissionais preparados para te <em className="text-sage-500 not-italic">escutar</em>
            </h2>
          </div>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-sage-600 max-w-sm font-light text-sm leading-relaxed">
            Nossa equipe é formada por especialistas registrados, comprometidos com a ética e o cuidado humanizado.
          </p>
        </div>

        {/* Lista de Profissionais */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {profissionais.map((p) => (
            <div key={p.nome} className="reveal opacity-0 translate-y-6 transition-all duration-700 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
              
              {/* Foto com moldura orgânica */}
              <div className="relative flex-shrink-0">
                <div className="w-48 h-60 rounded-t-[5rem] rounded-b-3xl overflow-hidden bg-sage-100 shadow-2xl shadow-sage-100 transition-transform duration-500 hover:scale-[1.02]">
                  <img src={p.imagem} alt={p.nome} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
                </div>
                {/* Elemento decorativo atrás da foto */}
                <div className="absolute -z-10 -bottom-4 -left-4 w-20 h-20 bg-warm-100 rounded-full blur-2xl opacity-60" />
              </div>

              {/* Informações */}
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="font-display text-3xl text-sage-900 font-light">{p.nome}</h3>
                  <p className="font-body text-sm text-sage-500 font-medium">{p.funcao}</p>
                  <span className="inline-block mt-1 font-body text-[10px] text-sage-400 tracking-wider uppercase">{p.crp}</span>
                </div>
                
                <p className="font-body text-sage-600 text-sm leading-relaxed font-light">
                  {p.bio}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {p.especialidades.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-cream-100 text-sage-700 font-body text-[10px] rounded-full uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}