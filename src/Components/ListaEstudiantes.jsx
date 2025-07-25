import React, { useState } from 'react'
import { TarjetaEstudiante } from './TarjetaEstudiante'
import { FormularioEstudiante } from './FormularioEstudiante'
import '../styles/cardStyle.css'

export const ListaEstudiantes = ({ dataStudent }) => {

  const [Formulario, setFormulario] = useState(false);
  if (Formulario) {
    return <FormularioEstudiante cerrar={()=> setFormulario(false)}/>
  }
  return (
    <div className='main-card'>
      {dataStudent.map(estudiante => (
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
