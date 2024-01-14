import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './NuevaConsulta.css'
import { useFormik } from 'formik';
import { usuarioApis } from '../../../apis/apiUsuario';

const NuevaConsulta = () => {
  const fetchUsers = async (values) => {
    try {
      await usuarioApis.postCommon('api/Consultas/Create', values);
      alert("Redireccionado....")
      window.location.href = "/consulta";
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      diagnostico: "",
      ciDoctor: sessionStorage.getItem('idUsuario'),
      ciPaciente: ""
    },
    onSubmit: values => {
      fetchUsers(values);
    },
  });

  return (
    <form className="nuevaConsulta" onSubmitCapture={formik.handleSubmit}>
      <div className="consultaContainer">
        <div className='consultaContainer__datos'>

          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">Doctor</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
              {...formik.getFieldProps('ciDoctor')} disabled/>
          </div>

          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">CI Paciente</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
              {...formik.getFieldProps('ciPaciente')} />
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
            {...formik.getFieldProps('diagnostico')}
          />
          <label htmlFor="floatingTextarea2">Diagnostico...</label>
        </div>


      </div>

    </form>
  )
}

export default NuevaConsulta