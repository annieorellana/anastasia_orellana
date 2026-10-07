import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Noticias from './components/Noticias'
import Contacto from './components/Contacto'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Noticias />
        <Contacto />
      </main>
      <footer className="footer py-4">
        <div className="container text-center">
          <p className="mb-0">© 2026 Anastasia Orellana · Portafolio Personal</p>
        </div>
      </footer>
    </>
  )
}

export default App
