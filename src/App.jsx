import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe'
import Depoimentos from './components/Depoimentos' // Adicione aqui

export default function App() {
  return (
    <div className="bg-cream-50">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Equipe />
      <Depoimentos /> {/* Adicione aqui */}
    </div>
  )
}