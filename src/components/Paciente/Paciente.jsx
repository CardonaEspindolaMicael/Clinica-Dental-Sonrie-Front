import React, { useEffect, useState } from 'react';
import { usuarioApis } from '../../apis/apiUsuario';
import './Paciente.css'
import DeleteButton from '../DeleteButton/DeleteButton';
import SuccessButton from '../SuccesButton/SuccessButton';
import UpdateButton from '../UpdateButton/UpdateButton';
const Paciente = () => {
  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  useEffect(() => {
    const fetchUsers = async()=>{
      try {
       const response = await usuarioApis.getCommon("api/Pacientes");
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
  <SuccessButton titulo='Nuevo Paciente' navigateTo='nuevoPaciente' widthButton='17%' heighButton='100%'/>
  <input type='text' className='pacienteContainer__filtrarPaciente' placeholder='paciente...'/>

  </div>
<table >
  <thead className='cabeceraPaciente'>
    <tr>
      <th>CI</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Edad</th>
      <th>Dirección</th>
      <th>Número Celular</th>
      <th>Correo</th>
      <th>Botones</th>
    </tr>
  </thead>
  <tbody>

    {
      data.map((paciente)=>(
      <tr className='subCuerpoPaciente' key={paciente.id}>
      <td>{paciente.documentoIdentidad}</td>
      <td>{paciente.nombre}</td>
      <td>{paciente.apellidos}</td>
      <td>{paciente.edad}</td>
      <td>{paciente.direccion}</td>
      <td>{paciente.numeroCelular}</td>
      <td>{paciente.correo}</td>
      <td>
        <UpdateButton
         titulo='Actualizar'
         navigateTo='actualizarPaciente' 
         object={paciente}
         identificador={paciente.id}/>

        <DeleteButton
                 titulo='Eliminar'
                 identificador={paciente.id}
                 elimino={setBorro}
                  />
                  
      </td>
      </tr>
    
      ))
     }


  </tbody>
</table>


    </div>
 
    
  );
};

export default Paciente;
