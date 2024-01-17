import React, { useEffect, useState } from 'react'
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import UpdateButton from '../../components/UpdateButton/UpdateButton';
import { usuarioApis } from '../../apis/apiUsuario';
import SuccessButton from '../../components/SuccesButton/SuccessButton';
import './Servicio.css'
import SearchFilter from '../../components/SearchFilter';
import Pagination from '../../components/Pagination';
const Servicio = () => {

  const [data, setData] = useState([]);
  const [borro,setBorro]=useState(false);
  const [search, setSearch]=useState("");
  const [currentPage, setCurrentPage] = useState(1); // Añade un estado para la página actual
  const itemsPerPage = 5; // Define cuántos elementos quieres mostrar por página
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
  <SuccessButton titulo='Nuevo Servicio' navigateTo='nuevoServicio' widthButton='17%' heighButton='100%'/>
  <SearchFilter value={search} onChange={searcher} placeholder='paciente...'/>

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
      currentItems.map((Servicio)=>(
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
<Pagination itemsPerPage={itemsPerPage} totalItems={results.length} paginate={paginate} />

    </div>
 
    
  );
}

export default Servicio