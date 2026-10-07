import ProyectoCard from './ProyectoCard'

const proyectos = [
  {
    id: 1,
    titulo: 'MetroSafe SOS',
    imagen: src={`${import.meta.env.BASE_URL}images/metrosafe.png`},
    descripcion: 'Aplicación web orientada a entregar una herramienta de apoyo para usuarios del Metro ante situaciones de emergencia.',
    tecnologias: 'HTML, CSS, JavaScript',
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    titulo: 'AdoptaConecta',
    imagen: src={`${import.meta.env.BASE_URL}images/adoptaconecta.png`},
    descripcion: 'Plataforma web enfocada en facilitar la adopción responsable y conectar personas con mascotas que buscan un hogar.',
    tecnologias: 'HTML, CSS, JavaScript',
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    titulo: 'Perfume Store',
    imagen: src={`${import.meta.env.BASE_URL}images/perfumes.svg`},
    descripcion: 'Sitio web de venta de perfumes con navegación para usuarios y una propuesta visual para administración de productos.',
    tecnologias: 'HTML, CSS, JavaScript, Bizagi',
    demo: '#',
    github: '#'
  }
]

function Proyectos() {
  return (
    <section id="proyectos" className="section-padding section-soft">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <span>02</span>
          <h2>Mis proyectos</h2>
          <p>Una selección de trabajos y proyectos académicos.</p>
        </div>
        <div className="row">
          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} {...proyecto} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos
