export default function Footer() {
  const currentYear = new Date().getFullYear()

  const redesSociais = [
    { 
      label: 'Instagram', 
      href: '#', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      label: 'LinkedIn', 
      href: '#', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      label: 'Facebook', 
      href: '#', 
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
  ]

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
            
            {/* Redes Sociais com Logos Reais */}
            <div className="flex gap-4">
              {redesSociais.map((rede) => (
                <a 
                  key={rede.label} 
                  href={rede.href} 
                  aria-label={rede.label}
                  className="w-10 h-10 rounded-full border border-sage-700 flex items-center justify-center text-sage-300 hover:bg-warm-500 hover:border-warm-500 hover:text-white transition-all duration-300"
                >
                  {rede.icon}
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

          {/* Localização com Mapa */}
          <div className="md:col-span-1.5">
            <h4 className="font-display text-lg mb-6 text-warm-200">Onde estamos</h4>
            <div className="space-y-4 font-body text-sm text-sage-300">
              <p className="flex items-start gap-3">
                <span className="text-warm-400 text-base">📍</span>
                Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100
              </p>
              <p className="flex items-center gap-3">
                <span className="text-warm-400 text-base">🕒</span>
                Seg - Sex: 08:00 às 20:00
              </p>
              
              <div className="pt-2">
                <div className="w-full h-36 rounded-2xl bg-sage-800 border-2 border-sage-800 overflow-hidden relative shadow-lg">
                  <iframe 
                    title="Mapa Mente Plena"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975031256334!2d-46.6521509!3d-23.5613497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1711550000000!5m2!1spt-BR!2sbr" 
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                  ></iframe>
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