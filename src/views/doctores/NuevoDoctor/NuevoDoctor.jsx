import { useFormik } from 'formik';
import { usuarioApis } from '../../../apis/apiUsuario';
import { useEffect, useState } from 'react';
const NuevoDoctor = () => {
 const [sucursales,setSucursales]= useState([])

  const fetchUsers = async (values) => {
    try {
      await usuarioApis.postCommon('api/Doctores/Create', values);
      alert("Redireccionado....")
      window.location.href = "/doctores";
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  useEffect(()=>{
    const fetchSucursal = async () => {
      try {
        const sucursalesEncontradas=await usuarioApis.getCommon('api/Sucursales/');
        setSucursales(sucursalesEncontradas);
      } catch (error) {
        console.log(error);
        alert(error)
      }
    }
    fetchSucursal()
  },[])

  const formik = useFormik({
    initialValues: {
      documentoIdentidad: "",
      genero: "",
      nombre: "",
      apellidos: "",
      fechaNacimiento: "2024-01-15T01:09:26.472Z",
      edad: "",
      direccion: "",
      numeroCelular: "",
      correo: "",
      especialidad: "",
      idSucursal: ""
    },
    onSubmit: values => {
      fetchUsers(values);
    },
  });



  return (
    <div className="containerNuevoPaciente">
      <div className="container mt-4 pacienteContainer">
        <form className="row g-2" onSubmitCapture={formik.handleSubmit}>

          <div className="col-6">
            <label htmlFor="documentoIdentidadDoctor" className="form-label">Número de Carnet</label>
            <input
              id="documentoIdentidadDoctor"
              name="documentoIdentidadDoctor"
              type="text"
              {...formik.getFieldProps('documentoIdentidad')}
              className="form-control "
              placeholder="Ejemplo: 123456789"
            />
          </div>

          <div className="col-6">
            <label htmlFor="generoDoctor" className="form-label">Género</label>
            <select
              id="generoDoctor"
              name="generoDoctor"
              {...formik.getFieldProps('genero')}
              className="form-control custom-select"
            >
              <option value="">Seleccionar Género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>
          </div>

          <div className="col-6">
            <label htmlFor="nombreDoctor" className="form-label">Nombre</label>
            <input
              id="nombreDoctor"
              name="nombreDoctor"
              type="text"
              {...formik.getFieldProps('nombre')}
              className="form-control"
              placeholder="Ejemplo: Juan"
            />
          </div>

          <div className="col-6">
            <label htmlFor="apellidosDoctor" className="form-label">Apellidos</label>
            <input
              id="apellidosDoctor"
              name="apellidosDoctor"
              type="text"
              {...formik.getFieldProps('apellidos')}
              className="form-control"
              placeholder="Ejemplo: Pérez Gómez"
            />
          </div>

          <div className="col-6">
            <label htmlFor="fechaNacimientoDoctor" className="form-label">Fecha de Nacimiento</label>
            <input
              id="fechaNacimientoDoctor"
              name="fechaNacimientoDoctor"
              type="date"
              {...formik.getFieldProps('fechaNacimiento')}
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label htmlFor="edadDoctor" className="form-label">Edad</label>
            <input
              id="edadDoctor"
              name="edadDoctor"
              type="number"
              {...formik.getFieldProps('edad')}
              className="form-control"
              placeholder="Ejemplo: 25"
            />
          </div>

          <div className="col-6">
            <label htmlFor="direccionDoctor" className="form-label">Dirección</label>
            <input
              id="direccionDoctor"
              name="direccionDoctor"
              type="text"
              {...formik.getFieldProps('direccion')}
              className="form-control"
              placeholder="Ejemplo: Calle 123, Ciudad"
            />
          </div>

          <div className="col-6">
            <label htmlFor="numeroCelularDoctor" className="form-label">Teléfono Celular</label>
            <input
              id="numeroCelularDoctor"
              name="numeroCelularDoctor"
              type="text"
              {...formik.getFieldProps('numeroCelular')}
              className="form-control"
              placeholder="Ejemplo: 555-1234"
            />
          </div>

          <div className="col-6">
            <label htmlFor="correoDoctor" className="form-label">Correo</label>
            <input
              id="correoDoctor"
              name="correoDoctor"
              type="text"
              {...formik.getFieldProps('correo')}
              className="form-control"
              placeholder="Ejemplo: juan@example.com"
            />
          </div>

          <div className="col-6">
            <label htmlFor="ocupacionDoctor" className="form-label">Especialidad</label>
            <input
              id="ocupacionDoctor"
              name="ocupacionDoctor"
              type="text"
              {...formik.getFieldProps('especialidad')}
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label htmlFor="sucursalDoctor" className="form-label">Sucursales</label>
            <select
                id="sucursalDoctor"
                name="sucursalDoctor"
                {...formik.getFieldProps('idSucursal')}
                className="form-control custom-select"
              
              >
            {
              sucursales.map((sucursal)=>(
       
                <option key={sucursal.id} value={sucursal.id}>{sucursal.nombre}</option>
           
              ))
             
            }   </select>
            
          </div>

          <div className="row mt-5">
            <button type="submit" className="btn btn-success">GUARDAR</button>
          </div>

        </form>
      </div>

    </div>

  );
}

export default NuevoDoctor;
