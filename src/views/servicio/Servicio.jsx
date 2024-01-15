import React, { useEffect, useState } from 'react'
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import UpdateButton from '../../components/UpdateButton/UpdateButton';
import { usuarioApis } from '../../apis/apiUsuario';
import SuccessButton from '../../components/SuccesButton/SuccessButton';
import './Servicio.css'
const Servicio = () => {

  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  useEffect(() => {
    const fetchUsers = async()=>{
      try {
       const response = await usuarioApis.getCommon("api/Servicios");
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
  <SuccessButton titulo='Nuevo Servicio' navigateTo='nuevoServicio' widthButton='17%' heighButton='100%'/>
  <input type='text' className='pacienteContainer__filtrarPaciente' placeholder='paciente...'/>

  </div>
<table >
  <thead className='cabeceraPaciente'>
    <tr>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Estado</th>
      <th>Acciones</th>
    </tr>
  </thead>
  <tbody>

    {
      data.map((Servicio)=>(
      <tr className='subCuerpoPaciente' key={Servicio.id}>
      <td>{Servicio.nombre}</td>
      <td>{Servicio.descripcion}</td>
      <td>{Servicio.estado}</td>
      <td>
      <UpdateButton
         titulo='Actualizar'
         navigateTo='actualizarServicio' 
         object={Servicio}
         identificador={Servicio.id}
         heighButton='40px'/>

        <DeleteButton
                 titulo='Eliminar'
                 identificador={Servicio.id}
                 elimino={setBorro}
                 heighButton='40px'
                 endpoint='api/Servicios/Delete'
                  />             
      </td>
      </tr>
    
      ))
     }
  </tbody>
</table>


    </div>
 
    
  );
}

export default Servicio