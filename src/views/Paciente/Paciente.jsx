import React, { useEffect, useState } from 'react';
import { usuarioApis } from '../../apis/apiUsuario';
import './Paciente.css'
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import SuccessButton from '../../components/SuccesButton/SuccessButton';
import UpdateButton from '../../components/UpdateButton/UpdateButton';
import SearchFilter from '../../components/SearchFilter';
import Pagination from '../../components/Pagination';
const Paciente = () => {
  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  const [search, setSearch]=useState("");
  const [currentPage, setCurrentPage] = useState(1); // Añade un estado para la página actual
  const itemsPerPage = 4; // Define cuántos elementos quieres mostrar por página
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
     setBorro(false);
  }, [,borro]);

  let results=[];

  !search ? results=data : results=data.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()) )
  

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
      <SuccessButton titulo='Nuevo Paciente' navigateTo='nuevoPaciente' widthButton='17%' heighButton='100%'/>
      <SearchFilter value={search} onChange={searcher} placeholder='paciente...'/>
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
      currentItems.map((paciente)=>(
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
         identificador={paciente.id}
         heighButton='40px'/>

        <DeleteButton
                 titulo='Eliminar'
                 identificador={paciente.id}
                 elimino={setBorro}
                 heighButton='40px'
                 endpoint='api/Pacientes/Delete'
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
};

export default Paciente;
