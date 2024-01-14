import React from 'react'
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from "formik"
import axios from "axios"
import './login.css'
import logo from '/logo.png'
export const Login = () => {

 

  const signIn = useSignIn();
  
  const onSubmit = async (values) => {
      try {
        const response = await axios.post(
          import.meta.env.VITE_BASE_URL+"api/Usuarios/Login",
          values
        );
        signIn({
          auth:{
          token: response.data.token,
          type:'Bearer',
          }
        });
        sessionStorage.setItem('idUsuario',response.data.ciDoctor)
        //sessionStorage.setItem('imagenUsuario',response.data.user.imagen)
        sessionStorage.setItem('rolUsuario',response.data.nombreRol)
        const nombre=(response.data.nombreDoctor).split(" ")
        sessionStorage.setItem('idNombre',nombre[0]+' '+nombre[1])
        window.location.href = "/dashboard";
      } catch (error) {
        alert('contraseña incorrecta')
        return error
      }
  };

  const formik = useFormik({
    initialValues: {
      nombre: "",
      contrasena: "",
    },
    onSubmit,
  });

  return (
    /*<div className='loginParent'>

      <div className='loginChild'>
        <img className="logoLogin" src={logo} />
        
        <div className='loginData'>
          <label>User:</label>
          <input className='input_user' type='text' placeholder='user' maxLength={100} minLength={3} {...formik.getFieldProps('nombre')} />
          <label>Password:</label>
          <input className='input_password' type='password' placeholder='password' maxLength={256} minLength={3} {...formik.getFieldProps('contrasena')}/>
          <div className='LoginData__button'>
          <button type="submit" onClick={formik.handleSubmit}>Login</button>
          </div>

        </div>
        
      </div>

     
    </div>*/
    <main class="form-signin w-100 m-auto">
    <form>
    <img class="mb-4" alt="" width="300" height="200" src={logo} />
      <div class="form-floating">
        <input  id="floatingInput" class="form-control" type='text' placeholder='User' maxLength={100} minLength={3} {...formik.getFieldProps('nombre')} />
        <label for="floatingInput">USUARIO</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder='Password' maxLength={256} minLength={3} {...formik.getFieldProps('contrasena')}/>
        <label for="floatingPassword">CONTRACEÑA</label>
      </div>
      <button class="btn btn-primary w-100 py-2" type="submit"  onClick={formik.handleSubmit}>LOGIN</button>
    </form>
    </main>
  )
}

export default Login