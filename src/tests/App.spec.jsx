import React from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import App from '../App'
import ProyectoCard from '../components/ProyectoCard'
import Contacto from '../components/Contacto'

afterEach(() => cleanup())

describe('Portafolio personal - componentes críticos', () => {
  it('renderiza el nombre de la estudiante en la página principal', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Anastasia Aracely Orellana Jaramillo/i })).not.toBeNull()
  })

  it('renderiza al menos tres proyectos', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'MetroSafe SOS' })).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'AdoptaConecta' })).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'Perfume Store' })).not.toBeNull()
  })

  it('carga las dos noticias desde el JSON', async () => {
    render(<App />)
    expect(await screen.findByRole('heading', { name: 'Nuevo proyecto de desarrollo web' })).not.toBeNull()
    expect(await screen.findByRole('heading', { name: 'Aprendiendo React y pruebas unitarias' })).not.toBeNull()
  })

  it('usa props para mostrar información de una tarjeta de proyecto', () => {
    render(
      <ProyectoCard
        titulo="Proyecto de prueba"
        imagen="/images/perfumes.svg"
        descripcion="Descripción de prueba"
        tecnologias="React"
        demo="#"
        github="#"
      />
    )
    expect(screen.getByRole('heading', { name: 'Proyecto de prueba' })).not.toBeNull()
    expect(screen.getByText('React')).not.toBeNull()
  })

  it('actualiza el estado del input de nombre', () => {
    render(<Contacto />)
    const input = screen.getByLabelText('Nombre')
    fireEvent.change(input, { target: { value: 'Anastasia' } })
    expect(input.value).toBe('Anastasia')
  })

  it('muestra un mensaje después de enviar el formulario', () => {
    render(<Contacto />)
    const input = screen.getByLabelText('Nombre')
    const textarea = screen.getByLabelText('Mensaje')
    fireEvent.change(input, { target: { value: 'Anastasia' } })
    fireEvent.change(textarea, { target: { value: 'Hola' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Enviar mensaje' }).closest('form'))
    expect(screen.getByRole('status')).not.toBeNull()
    expect(screen.getByText(/mensaje fue enviado correctamente/i)).not.toBeNull()
  })
})
