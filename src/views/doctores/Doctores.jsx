import React, { useEffect, useState } from 'react';
import { usuarioApis } from '../../apis/apiUsuario';
import UpdateButton from '../../components/UpdateButton/UpdateButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import SuccessButton from '../../components/SuccesButton/SuccessButton';
import SearchFilter from '../../components/SearchFilter';
import Pagination from '../../components/Pagination';


const Doctores = () => {
  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  const [search, setSearch]=useState("");
  const [currentPage, setCurrentPage] = useState(1); // Añade un estado para la página actual
  const itemsPerPage = 5; // Define cuántos elementos quieres mostrar por página
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

  let results=[];

  !search ? results=data : results=data.filter((dato)=> dato.documentoIdentidad.toLowerCase().includes(search.toLocaleLowerCase()) )
  

   const searcher=(e)=>{
    setSearch(e.target.value);
    console.log(e.target.value)
  }
      // Cambia la página
      const paginate = pageNumber => setCurrentPage(pageNumber);

      // Obtiene los elementos actuales a mostrar en la página
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className='pacienteContainer'>
  <div className="pacienteContainer__filtro">
  <SuccessButton titulo='Nuevo Doctor' navigateTo='nuevoDoctor' widthButton='17%' heighButton='100%'/>
  <SearchFilter value={search} onChange={searcher} placeholder='paciente...'/>


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
      currentItems.map((doctor)=>(
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
<Pagination itemsPerPage={itemsPerPage} totalItems={results.length} paginate={paginate} />


    </div>
 
    
  );
}

export default Doctores