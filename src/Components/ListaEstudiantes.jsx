import React from 'react'
import { TarjetaEstudiante } from './TarjetaEstudiante'

export const ListaEstudiantes = ({ dataStudent }) => {
  return (
    <div className='main-card'>
      {dataStudent.map(estudiante => (
        <div className='card'>
          <TarjetaEstudiante {...estudiante}/>
          <div className='botonera'>
          <button className='card_btn'>editar</button>
          <button className='card_btn'>Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  )
}
