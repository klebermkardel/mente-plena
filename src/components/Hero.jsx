import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const [proximoHorario, setProximoHorario] = useState('')

  useEffect(() => {
    // 1. Lógica para calcular o horário dinâmico
    const calcularHorario = () => {
      const agora = new Date()
      const horaAtual = agora.getHours()
      
      // Se for antes das 8h, o primeiro horário é hoje às 8h
      if (horaAtual < 8) {
        setProximoHorario('Hoje, 08h — Online')
      } 
      // Se estiver entre 8h e 19h (ainda tem horários hoje)
      else if (horaAtual >= 8 && horaAtual < 20) {
        const proxima = horaAtual + 1
        setProximoHorario(`Hoje, ${proxima}h — Online`)
      } 
      // Se for 20h ou mais, só amanhã às 8h
      else {
        setProximoHorario('Amanhã, 08h — Online')
      }
    }

    calcularHorario()

    // 2. Sua animação reveal original
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-6')
        el.classList.add('opacity-100', 'translate-y-0')
      }, i * 150)
    })
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50"
    >
      {/* ... Blobs decorativos (Mantenha igual ao seu) ... */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-sage-100 opacity-50 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cream-300 opacity-40 blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-sage-200 opacity-30 blur-2xl animate-float" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Coluna esquerda — texto (Mantenha igual ao seu) */}
        <div className="space-y-8">
           {/* ... conteúdo da esquerda ... */}
           <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-sage-100 text-sage-600 text-xs font-body tracking-widest uppercase rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-400 animate-pulse-soft" />
              Psicologia Clínica
            </span>
          </div>

          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 font-display text-5xl md:text-6xl lg:text-7xl text-sage-900 leading-[1.1] font-light">
            Cuidar da{' '}
            <em className="text-sage-500 not-italic">mente</em>{' '}
            é o maior ato de{' '}
            <em className="text-warm-500 not-italic">amor-próprio</em>
          </h1>

          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 font-body text-sage-600 text-lg leading-relaxed max-w-md font-light">
            Atendimento psicológico humanizado, presencial e online. Um espaço seguro para você se reconectar com quem você é.
          </p>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="px-8 py-3.5 bg-sage-500 text-white font-body text-sm rounded-full hover:bg-sage-600 active:scale-95 transition-all shadow-lg shadow-sage-200"
            >
              Agendar minha consulta
            </a>
            <a
              href="#sobre"
              className="px-8 py-3.5 border border-sage-300 text-sage-700 font-body text-sm rounded-full hover:bg-sage-50 active:scale-95 transition-all"
            >
              Conhecer a clínica
            </a>
          </div>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 flex gap-8 pt-4 border-t border-cream-300">
            {[
              { num: '500+', label: 'Pacientes atendidos' },
              { num: '8 anos', label: 'De experiência' },
              { num: '98%', label: 'Satisfação' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-sage-700">{s.num}</div>
                <div className="font-body text-xs text-sage-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita — card visual */}
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 relative">
          {/* ... SVG e Card da Dra. Ana (Mantenha igual ao seu) ... */}
          <div className="relative rounded-3xl overflow-hidden bg-sage-200 aspect-[4/5] max-w-sm mx-auto shadow-2xl shadow-sage-200">
            <div className="absolute inset-0 bg-gradient-to-b from-sage-300 to-sage-500" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
              <circle cx="200" cy="160" r="120" fill="white" opacity="0.08"/>
              <circle cx="320" cy="350" r="80" fill="white" opacity="0.05"/>
              <path d="M60 80 Q100 40 140 80 Q100 120 60 80Z" fill="white" opacity="0.12"/>
              <path d="M280 380 Q320 340 360 380 Q320 420 280 380Z" fill="white" opacity="0.1"/>
            </svg>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 text-white">
                <p className="font-display text-2xl font-light leading-snug">"Aqui, você encontra espaço para ser você mesmo."</p>
                <p className="font-body text-sm mt-3 opacity-80">Dra. Ana Lima — Psicóloga Clínica</p>
              </div>
            </div>
          </div>

          {/* CARD FLUTUANTE ATUALIZADO */}
          <div className="absolute -bottom-4 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 text-lg">🗓</div>
            <div>
              <div className="font-body text-xs text-sage-400">Próximo horário</div>
              <div className="font-body text-sm font-medium text-sage-800">
                {proximoHorario || 'Carregando...'}
              </div>
            </div>
          </div>

          {/* ... Avaliação ★★★★★ ... */}
          <div className="absolute -top-4 -right-4 md:-right-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 animate-float">
            <span className="text-amber-400 text-sm">★★★★★</span>
            <span className="font-body text-xs text-sage-700 font-medium">5.0</span>
          </div>
        </div>
      </div>
      
      {/* ... Scroll bounce ... */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-sage-400 tracking-widest uppercase">scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sage-400">
          <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}