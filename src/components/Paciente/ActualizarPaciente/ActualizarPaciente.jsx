
import { useFormik } from 'formik';
import { usuarioApis } from '../../../apis/apiUsuario';
import { useLocation } from 'react-router-dom';
import './ActualizarPaciente.css'
const ActualizarPaciente = () => {
  const location = useLocation();
  const miEstado = location.state;
  const usuarioToUpdate = miEstado.objeto;
  console.log(usuarioToUpdate.documentoIdentidad)
  const fetchUsers = async (values) => {
    try {
      await usuarioApis.putCommon(`api/Pacientes/Update/${miEstado.identificador}`, values);
      alert("Redireccionado....")
      window.location.href = "/paciente";
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      documentoIdentidad: usuarioToUpdate.documentoIdentidad,
      genero: usuarioToUpdate.genero,
      nombre: usuarioToUpdate.nombre,
      apellidos: usuarioToUpdate.apellidos,
      fechaNacimiento: usuarioToUpdate.fechaNacimiento,
      edad:usuarioToUpdate.edad,
      direccion:usuarioToUpdate.direccion,
      numeroCelular:usuarioToUpdate.numeroCelular,
      correo:usuarioToUpdate.correo,
      ocupacion: usuarioToUpdate.ocupacion,
      estadoCivil: usuarioToUpdate.estadoCivil
    },
    onSubmit: values => {
      fetchUsers(values);
    },
  });



  return (
    /*
    <div className="pacienteContainerActualizar">
      <form className='pacienteFormActualizar' onSubmitCapture={formik.handleSubmit}>
        <label htmlFor="documentoIdentidadPacienteAct">Documento de Identidad</label>
        <input
          id="documentoIdentidadPacienteAct"
          name="documentoIdentidadPacienteAct"
          type="text"

          {...formik.getFieldProps('documentoIdentidad')}
        />
        <label htmlFor="generoPacientAct">Genero</label>
        <input
          id="generoPacienteAct"
          name="generoPacientAct"
          type="text"
          {...formik.getFieldProps('genero')}
        />
        <label htmlFor="nombrePacienteAct">Nombre</label>
        <input
          id="nombrePacienteAct"
          name="nombrePacienteAct"
          type="text"
          {...formik.getFieldProps('nombre')}
        />
        <label htmlFor="apellidosPacienteAct">Apellidos</label>
        <input
          id="apellidosPacienteAct"
          name="apellidosPacienteAct"
          type="text"
          {...formik.getFieldProps('apellidos')}
        />
        <label htmlFor="fechaNacimientoPacienteAct">Fecha de Nacimiento</label>
        <input
          id="fechaNacimientoPacienteAct"
          name="fechaNacimientoPacienteAct"
          type="text"
          {...formik.getFieldProps('fechaNacimiento')}
        />
        <label htmlFor="edadPacienteAct">Edad</label>
        <input
          id="edadPacienteAct"
          name="edadPacienteAct"
          type="number"
          {...formik.getFieldProps('edad')}
        />
        <label htmlFor="direccionPacienteAct">Direccion</label>
        <input
          id="direccionPacienteAct"
          name="direccionPacienteAct"
          type="text"       
          {...formik.getFieldProps('direccion')}
        />

        <label htmlFor="numeroCelularPacienteAct">Numero de celular</label>
        <input
          id="numeroCelularPacienteAct"
          name="numeroCelularPacienteAct"
          type="text"
          {...formik.getFieldProps('numeroCelular')}
        />
        <label htmlFor="correoPacienteAct">Correo</label>
        <input
          id="correoPacienteAct"
          name="correoPacienteAct"
          type="text"
          {...formik.getFieldProps('correo')}
        />
        <label htmlFor="ocupacionPacienteAct">Ocupacion</label>
        <input
          id="ocupacionPacienteAct"
          name="ocupacionPacienteAct"
          type="text"
          {...formik.getFieldProps('ocupacion')}
        />
        <label htmlFor="estadoCivilPacienteAct">Estado Civil</label>
        <input
          id="estadoCivilPacienteAct"
          name="estadoCivilPacienteAct"
          type="text"
          {...formik.getFieldProps('estadoCivil')}
        />


        <button type="submit">Submit</button>
      </form>
    </div>
*/
<div className="container mt-4 pacienteContainer">
  <form className="row g-2" onSubmitCapture={formik.handleSubmit}>

    <div className="col-6">
      <label htmlFor="documentoIdentidadPaciente" className="form-label">Número de Carnet</label>
      <input
        id="documentoIdentidadPaciente"
        name="documentoIdentidadPaciente"
        type="text"
        {...formik.getFieldProps('documentoIdentidad')}
        className="form-control "
        placeholder="Ejemplo: 123456789"
      />
    </div>

    <div className="col-6">
      <label htmlFor="generoPaciente" className="form-label">Género</label>
      <select
        id="generoPaciente"
        name="generoPaciente"
        {...formik.getFieldProps('genero')}
        className="form-control custom-select"
      >
        <option value="">Seleccionar Género</option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
    </div>

    <div className="col-6">
      <label htmlFor="nombrePaciente" className="form-label">Nombre</label>
      <input
        id="nombrePaciente"
        name="nombrePaciente"
        type="text"
        {...formik.getFieldProps('nombre')}
        className="form-control"
        placeholder="Ejemplo: Juan"
      />
    </div>

    <div className="col-6">
      <label htmlFor="apellidosPaciente" className="form-label">Apellidos</label>
      <input
        id="apellidosPaciente"
        name="apellidosPaciente"
        type="text"
        {...formik.getFieldProps('apellidos')}
        className="form-control"
        placeholder="Ejemplo: Pérez Gómez"
      />
    </div>

    <div className="col-6">
      <label htmlFor="fechaNacimientoPaciente" className="form-label">Fecha de Nacimiento</label>
      <input
        id="fechaNacimientoPaciente"
        name="fechaNacimientoPaciente"
        type="date"
        {...formik.getFieldProps('fechaNacimiento')}
        className="form-control"
      />
    </div>

    <div className="col-6">
      <label htmlFor="edadPaciente" className="form-label">Edad</label>
      <input
        id="edadPaciente"
        name="edadPaciente"
        type="number"
        {...formik.getFieldProps('edad')}
        className="form-control"
        placeholder="Ejemplo: 25"
      />
    </div>

    <div className="col-6">
      <label htmlFor="direccionPaciente" className="form-label">Dirección</label>
      <input
        id="direccionPaciente"
        name="direccionPaciente"
        type="text"
        {...formik.getFieldProps('direccion')}
        className="form-control"
        placeholder="Ejemplo: Calle 123, Ciudad"
      />
    </div>

    <div className="col-6">
      <label htmlFor="numeroCelularPaciente" className="form-label">Teléfono Celular</label>
      <input
        id="numeroCelularPaciente"
        name="numeroCelularPaciente"
        type="text"
        {...formik.getFieldProps('numeroCelular')}
        className="form-control"
        placeholder="Ejemplo: 555-1234"
      />
    </div>

    <div className="col-6">
      <label htmlFor="correoPaciente" className="form-label">Correo</label>
      <input
        id="correoPaciente"
        name="correoPaciente"
        type="text"
        {...formik.getFieldProps('correo')}
        className="form-control"
        placeholder="Ejemplo: juan@example.com"
      />
    </div>

    <div className="col-6">
      <label htmlFor="ocupacionPaciente" className="form-label">Ocupación</label>
      <input
        id="ocupacionPaciente"
        name="ocupacionPaciente"
        type="text"
        {...formik.getFieldProps('ocupacion')}
        className="form-control"
        placeholder="Ejemplo: Estudiante"
      />
    </div>

    <div className="col-6">
      <label htmlFor="estadoCivilPaciente" className="form-label">Estado Civil</label>
      <input
        id="estadoCivilPaciente"
        name="estadoCivilPaciente"
        type="text"
        {...formik.getFieldProps('estadoCivil')}
        className="form-control"
        placeholder="Ejemplo: Soltero/a"
      />
    </div>

    <div className="row mt-5">
      <button type="submit" className="btn btn-success">GUARDAR</button>
    </div>

  </form>
</div>


  );
}

export default ActualizarPaciente;
