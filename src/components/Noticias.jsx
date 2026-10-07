import { useEffect, useState } from 'react'
import noticiasData from '../data/noticias.json'
import NoticiaCard from './NoticiaCard'

function Noticias() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    setNoticias(noticiasData)
  }, [])

  return (
    <section id="noticias" className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>03</span>
          <h2>Noticias</h2>
          <p>Contenido cargado dinámicamente desde un archivo JSON.</p>
        </div>
        <div className="row g-4">
          {noticias.map((noticia) => (
            <div className="col-md-6" key={noticia.id}>
              <NoticiaCard {...noticia} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Noticias
