function ProyectoCard({ imagen, titulo, descripcion, tecnologias, demo, github }) {
  return (
    <div className="col-md-6 col-xl-4 mb-4">
      <article className="card project-card h-100">
        <img src={imagen} className="card-img-top project-image" alt={`Vista previa del proyecto ${titulo}`} />
        <div className="card-body d-flex flex-column p-4">
          <h3 className="h4 card-title">{titulo}</h3>
          <p className="card-text flex-grow-1">{descripcion}</p>
          <p className="technology-line"><strong>Tecnologías:</strong> {tecnologias}</p>
          <div className="d-flex gap-2 flex-wrap">
            <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
            <a href={github} className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProyectoCard
