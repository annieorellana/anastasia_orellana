function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-navbar" aria-label="Navegación principal">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">AO | Portafolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir menú de navegación">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#inicio">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
            <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
            <li className="nav-item"><a className="nav-link" href="#noticias">Noticias</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
