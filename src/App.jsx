import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Equipe from './components/Equipe'
import Depoimentos from './components/Depoimentos'
import Contato from './components/Contato'
import Footer from './components/Footer' // Importe o Footer

export default function App() {
  return (
    <div className="bg-cream-50 selection:bg-sage-200 selection:text-sage-900">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Equipe />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}