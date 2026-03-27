export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-900 text-cream-50 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo e Bio */}
          <div className="col-span-1 md:col-span-1.5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-sage-400 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2C5.8 2 4 3.8 4 6c0 1.5.8 2.8 2 3.5V11h4V9.5c1.2-.7 2-2 2-3.5 0-2.2-1.8-4-4-4z" fill="white" opacity="0.9"/>
                </svg>
              </div>
              <span className="font-display text-2xl tracking-wide">Mente Plena</span>
            </div>
            <p className="font-body text-sage-300 text-sm leading-relaxed font-light">
              Um espaço dedicado ao cuidado integral da saúde mental, unindo ciência e humanidade para o seu bem-estar.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Facebook'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full border border-sage-700 flex items-center justify-center text-xs hover:bg-warm-500 hover:border-warm-500 transition-all duration-300">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-display text-lg mb-6 text-warm-200">Navegação</h4>
            <ul className="space-y-4 font-body text-sm text-sage-300">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Clínica</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#equipe" className="hover:text-white transition-colors">Nossa Equipe</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Agendamentos</a></li>
            </ul>
          </div>

          {/* Localização */}
          <div className="md:col-span-1.5">
            <h4 className="font-display text-lg mb-6 text-warm-200">Onde estamos</h4>
            <div className="space-y-4 font-body text-sm text-sage-300">
              <p className="flex items-start gap-3">
                <span className="text-warm-400">📍</span>
                Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100
              </p>
              <p className="flex items-center gap-3">
                <span className="text-warm-400">🕒</span>
                Seg - Sex: 08:00 às 20:00
              </p>
              <div className="pt-2">
                <div className="w-full h-24 rounded-2xl bg-sage-800 border border-sage-700 overflow-hidden flex items-center justify-center text-[10px] uppercase tracking-widest text-sage-600 font-bold">
                  Mapa Interativo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Final */}
        <div className="pt-10 border-t border-sage-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-body text-sage-500 uppercase tracking-widest">
          <p>© {currentYear} Mente Plena. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sage-300">Privacidade</a>
            <a href="#" className="hover:text-sage-300">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}