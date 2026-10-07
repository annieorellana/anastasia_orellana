import ProyectoCard from './ProyectoCard'

const proyectos = [
  {
    id: 1,
    titulo: 'MetroSafe SOS',
    imagen: `${import.meta.env.BASE_URL}images/metrosafe.png`,
    descripcion: 'Aplicación web orientada a entregar una herramienta de apoyo para usuarios del Metro ante situaciones de emergencia.',
    tecnologias: 'HTML, CSS, JavaScript',
    demo: '#',
    github: '#'
  },

  {
    id: 2,
    titulo: 'AdoptaConecta',
    imagen: `${import.meta.env.BASE_URL}images/adoptaconecta.png`,
    descripcion: 'Plataforma web enfocada en facilitar la adopción responsable y conectar personas con mascotas que buscan un hogar.',
    tecnologias: 'HTML, CSS, JavaScript',
    demo: '#',
    github: '#'
  },

  {
    id: 3,
    titulo: 'Perfume Store',
    imagen: `${import.meta.env.BASE_URL}images/perfumes.svg`,
    descripcion: 'Sitio web de venta de perfumes con navegación para usuarios y una propuesta visual para administración de productos.',
    tecnologias: 'HTML, CSS, JavaScript, Bizagi',
    demo: '#',
    github: '#'
  }
]

export default Proyectos