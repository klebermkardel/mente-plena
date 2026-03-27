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

export default function Contato() {
  const ref = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica de envio aqui
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <section id="contato" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Coluna 1: Informações */}
          <div className="space-y-12">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="font-body text-xs tracking-widest uppercase text-warm-500 font-bold">Contato</span>
              <h2 className="font-display text-4xl md:text-5xl text-sage-900 mt-4 font-light">
                Vamos iniciar uma <em className="text-sage-500 not-italic">conversa</em>?
              </h2>
              <p className="font-body text-sage-600 mt-6 font-light leading-relaxed">
                Tire suas dúvidas ou agende sua primeira sessão. Estou aqui para te ouvir e auxiliar nessa jornada.
              </p>
            </div>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center text-sage-500 group-hover:bg-sage-500 group-hover:text-white transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-sage-400 font-bold">WhatsApp</p>
                  <p className="font-body text-sage-800">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center text-sage-500 group-hover:bg-sage-500 group-hover:text-white transition-all duration-500">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-widest text-sage-400 font-bold">E-mail</p>
                  <p className="font-body text-sage-800">contato@menteplena.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Formulário */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-warm-50 p-8 md:p-12 rounded-[2.5rem] border border-warm-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-xs font-bold text-sage-700 uppercase ml-1">Nome</label>
                  <input type="text" placeholder="Seu nome completo" className="w-full bg-white border border-warm-200 rounded-2xl px-5 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all" required />
                </div>
                <div className="space-y-2">
                  <label className="font-body text-xs font-bold text-sage-700 uppercase ml-1">E-mail</label>
                  <input type="email" placeholder="seu@email.com" className="w-full bg-white border border-warm-200 rounded-2xl px-5 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage-200 focus:border-sage-300 transition-all" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-body text-xs font-bold text-sage-700 uppercase ml-1">Assunto</label>
                <select className="w-full bg-white border border-warm-200 rounded-2xl px-5 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all appearance-none cursor-pointer">
                  <option>Agendamento de sessão</option>
                  <option>Dúvidas sobre convênios</option>
                  <option>Outros assuntos</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-body text-xs font-bold text-sage-700 uppercase ml-1">Mensagem</label>
                <textarea rows="4" placeholder="Como posso te ajudar?" className="w-full bg-white border border-warm-200 rounded-2xl px-5 py-3.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-sage-500 text-white font-body text-sm font-bold rounded-2xl hover:bg-sage-600 active:scale-[0.98] transition-all shadow-lg shadow-sage-100 uppercase tracking-widest">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}