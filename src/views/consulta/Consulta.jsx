import React from 'react'
import pacientes from '../../json/paciente.json'
import "./Consulta.css"

const Consulta = () => {

  return (
    <div className="containerConsulta">
     <div className="containerConsulta__paciente">
      <label>
        <h1>CARNET PACIENTE</h1>
        <input className="carnetPaciente" type='number' maxLength={10}/>
      </label>
      <label>
        <h1>NOMBRE PACIENTE</h1>
        <ul className='mapaPaciente' >
        {
         pacientes.map((paciente)=>(
          
            <li key={paciente.ci}>
              {paciente.nombre}
            </li>
         
         ))
        
        }
         </ul>

      </label>
     </div>

     <textarea name='Diagnostico' rows={30} cols={120} placeholder='Escriba su diagnostico aqui...'>
      
     </textarea>

    </div>
  )
}

export default Consulta