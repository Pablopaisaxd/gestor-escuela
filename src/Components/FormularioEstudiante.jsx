import React, { useState } from 'react'
import '../styles/formStyles.css'

export const FormularioEstudiante = ({cerrar, agregar, actualizar, estudianteEditando}) => {

  const [values, setValues] = useState({
    nombre: estudianteEditando?.nombre || '',
    edad: estudianteEditando?.edad || '',
    carrera: estudianteEditando?.carrera || '',
    promedio: estudianteEditando?.promedio || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!values.nombre || !values.edad || !values.carrera || !values.promedio) {
      alert('Por favor completa todos los campos')
      return
    }

    if (estudianteEditando) {
      actualizar({
        id: estudianteEditando.id,
        ...values
      })
    } else {
      agregar(values)
    }

    setValues({
      nombre: '',
      edad: '',
      carrera: '',
      promedio: ''
    })
    cerrar()
  }

  const handleValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>   
      <h2>{estudianteEditando ? 'Editar Estudiante' : 'Formulario Estudiante'}</h2>
      <form className='formulario-estudiante' onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" value={values.nombre} onChange={handleValues} required minLength="2"/>
        <label htmlFor="edad">Edad:</label>
        <input type="number" name="edad" value={values.edad} onChange={handleValues} required min="16" max="60"/>
        <label htmlFor="carrera">Carrera:</label>
        <input type="text" name="carrera" value={values.carrera} onChange={handleValues} required/>
        <label htmlFor="promedio">Promedio Académico:</label>
        <input type="number" name="promedio" value={values.promedio} onChange={handleValues} required min="0" max="5" step="0.1"/>
        <button type="submit">
          {estudianteEditando ? 'Actualizar' : 'Guardar'}
        </button>
      </form>

      <button onClick={cerrar} className='btn-cerrar'>X</button>
    </div>
  )
}