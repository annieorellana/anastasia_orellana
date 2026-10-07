function Inicio() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">

          <div className="col-lg-7">
            <span className="badge rounded-pill text-bg-light mb-3">
              Ingeniería en Informática
            </span>

            <h1 className="display-3 fw-bold">
              Anastasia Aracely Orellana Jaramillo.
            </h1>

            <p className="lead mt-3">
              Estudiante de Ingeniería en Informática interesada en el desarrollo web,
              las redes y las tecnologías de software.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <a href="#proyectos" className="btn btn-primary btn-lg">
                Ver proyectos
              </a>

              <a href="#contacto" className="btn btn-outline-light btn-lg">
                Contactarme
              </a>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <img
              src={`${import.meta.env.BASE_URL}images/perfil.jpeg`}
              className="profile-image"
              alt="Foto de perfil de Anastasia Orellana"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Inicio