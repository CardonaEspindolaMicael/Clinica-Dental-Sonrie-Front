import React, { useEffect, useState } from 'react';
import { usuarioApis } from '../../apis/apiUsuario';
import UpdateButton from '../../components/UpdateButton/UpdateButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import SuccessButton from '../../components/SuccesButton/SuccessButton';


const Doctores = () => {
  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await usuarioApis.getCommon("api/Doctores");
        const doctorData = await Promise.all(response.map(async doctor => {
          const sucursalResponse = await usuarioApis.getCommon(`api/Sucursales/${doctor.idSucursal}`);
          return { ...doctor, sucursal: sucursalResponse };
        }));
        setData(doctorData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
    setBorro(false);
  }, [,borro]);

  return (
    <div className='pacienteContainer'>
  <div className="pacienteContainer__filtro">
  <SuccessButton titulo='Nuevo Doctor' navigateTo='nuevoDoctor' widthButton='17%' heighButton='100%'/>
  <input type='text' className='pacienteContainer__filtrarPaciente' placeholder='paciente...'/>

  </div>
<table >
  <thead className='cabeceraPaciente'>
    <tr>
      <th>CI</th>
      <th>Nombre</th>
      <th>Especialidad</th>
      <th>Sucursal</th>
      <th>Acciones</th>

    </tr>
  </thead>
  <tbody>

    {
      data.map((doctor)=>(
      <tr className='subCuerpoPaciente' key={doctor.id}>
      <td>{doctor.documentoIdentidad}</td>
      <td>{doctor.nombre}</td>
      <td>{doctor.especialidad}</td>
      <td>{(doctor.sucursal).nombre}</td>
      <td>
        <UpdateButton
         titulo='Actualizar'
         navigateTo='actualizarDoctor' 
         object={doctor}
         identificador={doctor.id}
         heighButton='40px'/>

        <DeleteButton
                 titulo='Eliminar'
                 identificador={doctor.id}
                 elimino={setBorro}
                 heighButton='40px'
                 endpoint='api/Doctores/Delete'
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

export default Doctores