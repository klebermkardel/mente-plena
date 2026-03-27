import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos' // Importe aqui

export default function App() {
  return (
    <div className="bg-cream-50">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos /> {/* Adicione aqui */}
    </div>
  )
}