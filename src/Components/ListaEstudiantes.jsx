import React, { useState } from 'react'
import { TarjetaEstudiante } from './TarjetaEstudiante'
import { FormularioEstudiante } from './FormularioEstudiante'
import '../styles/cardStyle.css'

export const ListaEstudiantes = ({ dataStudent}) => {


  const [estudiantes, setEstudiantes]= useState(dataStudent)
  const [Formulario, setFormulario] = useState(false)
  const agregar = (nuevoEstudiante) => {
    const idEstudiante={
    id: estudiantes.length + 1,
    ...nuevoEstudiante
  }
  setEstudiantes([...estudiantes,idEstudiante])
    console.log('Estudiante agregado:', nuevoEstudiante)}
  if (Formulario) {
    return <FormularioEstudiante cerrar={()=> setFormulario(false)} agregar={agregar}/>
  }
  return (
    <div className='main-card'>
      {estudiantes.map(estudiante => (
        <div className='card' key={estudiante.id}>
          <TarjetaEstudiante {...estudiante}/>
          <div className='botonera'>
          <button className='card_btn'>editar</button>
          <button className='card_btn'>Eliminar</button>
          </div>
        </div>
      ))}
      <div className='add-student'>
        <button onClick={()=>setFormulario(true)}>+</button>
      </div>
    </div>
  )
}
