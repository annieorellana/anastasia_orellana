import { useState } from 'react'

function Contacto() {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const enviarFormulario = (event) => {
    event.preventDefault()
    setEnviado(true)
    setNombre('')
    setMensaje('')
  }

  return (
    <section id="contacto" className="section-padding section-soft">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-heading text-center mb-5">
              <span>04</span>
              <h2>Contacto</h2>
              <p>Formulario de contacto implementado con state y eventos de React.</p>
            </div>
            <form className="contact-card p-4 p-md-5" onSubmit={enviarFormulario}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  id="mensaje"
                  className="form-control"
                  rows="5"
                  value={mensaje}
                  onChange={(event) => setMensaje(event.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Enviar mensaje</button>
              {enviado && (
                <div className="alert alert-success mt-3 mb-0" role="status">
                  ¡Gracias! El mensaje fue enviado correctamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
