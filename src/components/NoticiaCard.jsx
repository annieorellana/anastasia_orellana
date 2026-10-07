function NoticiaCard({ titulo, fecha, contenido }) {
  return (
    <article className="card news-card h-100">
      <div className="card-body p-4">
        <span className="news-date">{fecha}</span>
        <h3 className="h4 mt-2">{titulo}</h3>
        <p className="mb-0">{contenido}</p>
      </div>
    </article>
  )
}

export default NoticiaCard
