
import { useFormik } from 'formik';
import { usuarioApis } from '../../../apis/apiUsuario';
import './NuevoPaciente.css'
const NuevoPaciente = () => {


  const fetchUsers = async (values) => {
    try {
    await usuarioApis.postCommon('api/Pacientes/Create',values);
    alert("Redireccionado....")
    window.location.href = "/paciente";
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      documentoIdentidad: "",
      genero: "",
      nombre: "",
      apellidos: "",
      fechaNacimiento: "",
      edad: "",
      direccion: "",
      numeroCelular: "",
      correo: "",
      ocupacion: "",
      estadoCivil: ""
    },
    onSubmit: values => {
      fetchUsers(values);
    },
  });



  return (
    <div className="pacienteContainer">
      <form className='pacienteForm' onSubmitCapture={formik.handleSubmit}>
        <label htmlFor="documentoIdentidadPaciente">Documento de Identidad</label>
        <input
          id="documentoIdentidadPaciente"
          name="documentoIdentidadPaciente"
          type="text"
          {...formik.getFieldProps('documentoIdentidad')}
        />
        <label htmlFor="generoPaciente">Genero</label>
        <input
          id="generoPaciente"
          name="generoPaciente"
          type="text"
          {...formik.getFieldProps('genero')}
        />
        <label htmlFor="nombrePaciente">Nombre</label>
        <input
          id="nombrePaciente"
          name="nombrePaciente"
          type="text"
          {...formik.getFieldProps('nombre')}
        />
        <label htmlFor="apellidosPaciente">Apellidos</label>
        <input
          id="apellidosPaciente"
          name="apellidosPaciente"
          type="text"
          {...formik.getFieldProps('apellidos')}
        />
        <label htmlFor="fechaNacimientoPaciente">Fecha de Nacimiento</label>
        <input
          id="fechaNacimientoPaciente"
          name="fechaNacimientoPaciente"
          type="text"
          {...formik.getFieldProps('fechaNacimiento')}
        />
        <label htmlFor="edadPaciente">Edad</label>
        <input
          id="edadPaciente"
          name="edadPaciente"
          type="number"
          {...formik.getFieldProps('edad')}
        />
        <label htmlFor="direccionPaciente">Direccion</label>
        <input
          id="direccionPaciente"
          name="direccionPaciente"
          type="text"
          {...formik.getFieldProps('direccion')}
        />

        <label htmlFor="numeroCelularPaciente">Numero de celular</label>
        <input
          id="numeroCelularPaciente"
          name="numeroCelularPaciente"
          type="text"
          {...formik.getFieldProps('numeroCelular')}
        />
        <label htmlFor="correoPaciente">Correo</label>
        <input
          id="correoPaciente"
          name="correoPaciente"
          type="text"
          {...formik.getFieldProps('correo')}
        />
        <label htmlFor="ocupacionPaciente">Ocupacion</label>
        <input
          id="ocupacionPaciente"
          name="ocupacionPaciente"
          type="text"
          {...formik.getFieldProps('ocupacion')}
        />
        <label htmlFor="estadoCivilPaciente">Estado Civil</label>
        <input
          id="estadoCivilPaciente"
          name="estadoCivilPaciente"
          type="text"
          {...formik.getFieldProps('estadoCivil')}
        />


        <button type="submit">Submit</button>
      </form>
    </div>

  );
}

export default NuevoPaciente;
