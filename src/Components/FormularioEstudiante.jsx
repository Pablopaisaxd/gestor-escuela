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
    switch (true) {
      case values.nombre.length < 2:
        alert("El nombre debe tener mas de 2 caracteres")
        return
      case values.edad < 16 || values.edad > 60:
        alert("Debes ser mayor de 16 años o menor de 60")
        return
      case values.promedio < 0 || values.promedio > 5:
        alert("El promedio se califica de 0 a 5")
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
        <input type="text" name="nombre" value={values.nombre} onChange={handleValues}/>
        <label htmlFor="edad">Edad:</label>
        <input type="number" name="edad" value={values.edad} onChange={handleValues} />
        <label htmlFor="carrera">Carrera:</label>
        <input type="text" name="carrera" value={values.carrera} onChange={handleValues} />
        <label htmlFor="promedio">Promedio Académico:</label>
        <input type="number" name="promedio" value={values.promedio} onChange={handleValues} />
        <button type="submit">
          {estudianteEditando ? 'Actualizar' : 'Guardar'}
        </button>
      </form>

      <button onClick={cerrar} className='btn-cerrar'>X</button>
    </div>
  )
}