import React, { useState } from 'react'
import { TarjetaEstudiante } from './TarjetaEstudiante'
import { FormularioEstudiante } from './FormularioEstudiante'
import '../styles/cardStyle.css'

export const ListaEstudiantes = ({ dataStudent}) => {
  const [estudiantes, setEstudiantes] = useState(dataStudent)
  const [formulario, setFormulario] = useState(false)
  const [estudianteEditando, setEstudianteEditando] = useState(null)

  const agregar = (nuevoEstudiante) => {
    const idEstudiante = {
      id: estudiantes.length + 1,
      ...nuevoEstudiante
    }

    setEstudiantes([...estudiantes, idEstudiante])
    console.log('Estudiante agregado:', nuevoEstudiante)
  }

  const eliminar = (id) => {
    const estudiantesActualizados = estudiantes.filter(estudiante => estudiante.id !== id)
    setEstudiantes(estudiantesActualizados)
    console.log('Estudiante eliminado', id)
  }

  const edicion = (estudiante) => {
    setEstudianteEditando(estudiante)
    setFormulario(true)
  }

  const actualizar = (estudianteActualizado) => {
    const estudiantesActualizados = estudiantes.map(estudiante => 
      estudiante.id === estudianteActualizado.id 
        ? { ...estudianteActualizado }  : estudiante
    )
    setEstudiantes(estudiantesActualizados)
    setEstudianteEditando(null)
    console.log('Estudiante actualizado:', estudianteActualizado)
  }

  const cerrarFormulario = () => {
    setFormulario(false)
    setEstudianteEditando(null)
  }

  if (formulario) {
    return (
      <FormularioEstudiante 
        cerrar={cerrarFormulario} 
        agregar={agregar}
        actualizar={actualizar}
        estudianteEditando={estudianteEditando}
      />
    )
  }

  return (
    <div className='main-card'>
      {estudiantes.map(estudiante => (
        <div className='card' key={estudiante.id}>
          <TarjetaEstudiante {...estudiante}/>
          <div className='botonera'>
            <button 
              className='card_btn'
              onClick={() => edicion(estudiante)}>Editar</button>
            <button 
              className='card_btn'
              onClick={() => eliminar(estudiante.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <div className='add-student'>
        <button onClick={() => setFormulario(true)}>+</button>
      </div>
    </div>
  )
}