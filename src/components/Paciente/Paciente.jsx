import React, { useEffect, useState } from 'react';
import { usuarioApis } from '../../apis/apiUsuario';
import pacientes from '../../json/paciente.json'
import './Paciente.css'
import DeleteButton from '../DeleteButton/DeleteButton';
import SuccessButton from '../SuccesButton/SuccessButton';
const Paciente = () => {
  const [data, setData] = useState([]);
  const paciente1=pacientes[0];
  useEffect(() => {
    const fetchUsers = async()=>{
      try {
       const response = await usuarioApis.getUsuarios();
       setData(response)
      } catch (error) {
        console.log(error);
      }
     }
     fetchUsers();
  }, []);



  return (
    <div className='pacienteContainer'>
  <div className="pacienteContainer__filtro">
  <button className="pacienteContainer__nuevo">Nuevo</button>
  <input type='text' className='pacienteContainer__filtrarPaciente' placeholder='paciente...'/>

  </div>
<table>
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
      <tr key={paciente.id}>
      <td>{paciente.documentoIdentidad}</td>
      <td>{paciente.nombre}</td>
      <td>{paciente.apellidos}</td>
      <td>{paciente.edad}</td>
      <td>{paciente.direccion}</td>
      <td>{paciente.numeroCelular}</td>
      <td>{paciente.correo}</td>
      <td>
        <SuccessButton/> 
        <DeleteButton/>
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
