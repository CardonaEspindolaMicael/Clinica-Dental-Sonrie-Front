import React, { useEffect, useState } from 'react'
import "./Consulta.css"
import { usuarioApis } from '../../apis/apiUsuario';
import SuccessButton from '../../components/SuccesButton/SuccessButton';


const Consulta = () => {
  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  useEffect(() => {
    const fetchUsers = async()=>{
      try {
       const response = await usuarioApis.getCommon("api/Consultas");
       setData(response)
      } catch (error) {
        console.log(error);
      }
     }
     fetchUsers();
  }, [,borro]);

  return (
<div className='pacienteContainer'>
  <div className="pacienteContainer__filtro">
  <SuccessButton titulo='Nueva Consulta' navigateTo='nuevaConsulta' widthButton='17%' heighButton='100%'/>
  <input type='text' className='pacienteContainer__filtrarPaciente' placeholder='paciente...'/>

  </div>
<table >
  <thead className='cabeceraPaciente'>
    <tr>
      <th>Paciente</th>
      <th>Fecha Consulta</th>
      <th>Diagnostico</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>

    {
      data.map((consulta)=>(
      <tr className='subCuerpoPaciente' key={consulta.id}>
      <td>{consulta.paciente}</td>
      <td>{consulta.fechaConsulta}</td>
      <td>{consulta.diagnostico}</td>
      <td>
      <SuccessButton titulo='Crear Proforma' navigateTo='nuevaProforma'/>   
                  
      </td>
      </tr>
    
      ))
     }
  </tbody>
</table>


    </div>
 
    
  );
}

export default Consulta