
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

  );
}

export default ActualizarPaciente;
