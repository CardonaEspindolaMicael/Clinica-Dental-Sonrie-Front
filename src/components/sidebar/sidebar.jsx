import React from 'react'
import "./sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'
import userIcon from "/icon-userLogin.svg"
import money from "/Money.png"
import historial from "/historial.png"
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import LogoutIcon from '/iconoCerrarSesion.svg'

import logo from '/logo.png'
import USER from '/USER.png'

const Sidebar = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const logout = () => {
    signOut();
    sessionStorage.removeItem('idUsuario')
    sessionStorage.removeItem('rolUsuario')
    //sessionStorage.removeItem('imagenUsuario')
    sessionStorage.removeItem('idNombre')
    navigate("/")

  }
  return (
    <aside className='Sidebar'>
      <div className="container__sidebar">
        <div className='datos__user'>
            <img src={logo} alt="logo_clinica" />
            <h2 className='buttonSidebar'>R</h2>
        </div>
        <nav >
         
          <ul className='barra__navegacion'>
          <h5>MENU</h5>
            <li>
              <img src={money} />
              <Link className='barra__navegacionRutasAb' to="#">Servicios</Link>
            </li>
            <li>
              <img src={historial} />
              <Link className='barra__navegacionRutasAb' to="#">Tratamiento</Link>
            </li>
            <li>
              <img src={historial} />
              <Link className='barra__navegacionRutasAb' to="/consulta">Historial Medico</Link>
            </li>
            <li>
              <img src={userIcon} />
              <Link className='barra__navegacionRutasAb' to="/consulta">Paciente</Link>
            </li>
            <li>

            </li>
          </ul>
        </nav>
        <div className='usuarioNombre'>
           <h5>PROFILE</h5>
          <div className='usuarioNombre__top'>
          <img src={USER} alt="imagen_Perfil" />
          <h6>{sessionStorage.getItem("idNombre")}</h6>
          </div>
          <div className='usuarioNombre__botton'>
            <img src={LogoutIcon} />
            <a className='barra__navegacionRutasAb' onClick={logout}>Cerrar Sesion</a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar