
import 'bootstrap/dist/css/bootstrap.css';
import './NuevoServicio.css'
import { useFormik } from 'formik';
import { usuarioApis } from '../../../apis/apiUsuario';
export const NuevoServicio = () => {
  const fetchUsers = async (values) => {
    try {
      await usuarioApis.postCommon('api/Servicios/Create', values);
      alert("Redireccionado....")
      window.location.href = "/servicio";
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: ""
    },
    onSubmit: values => {
      fetchUsers(values);
    },
  });

  return (
    <form className="nuevoServicio" onSubmitCapture={formik.handleSubmit}>
      <div className="servicioContainer">
        <div className='servicioContainer__datos'>

          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Servicio</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
              {...formik.getFieldProps('nombre')} />
          </div>
          <div>
            <button type="submit" className="btn btn-secondary">GUARDAR</button>
          </div>

        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: '400px' }}
            {...formik.getFieldProps('descripcion')}
          />
          <label htmlFor="floatingTextarea2">Descripcion...</label>
        </div>


      </div>

    </form>
  )
}
