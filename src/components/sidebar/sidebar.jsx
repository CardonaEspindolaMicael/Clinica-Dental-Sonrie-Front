import React from 'react'
import "./sidebar.css"
import { mostrarOpciones } from '../../helpers/mostrarOpciones'
import userIcon from "/icon-userLogin.svg"
import money from "/Money.png"
import tratamiento from "/tratamiento.png"
import historial from "/historial.png"
import cerrarSesion from "/iconoCerrarSesion.svg"
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { Link, useNavigate } from 'react-router-dom'
import DropdownG from '../dropdown/DropdownG'

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
    <aside>
      <div className="container__sidebar">

        <div className='datos__user' key={sessionStorage.getItem('idUsuario')}>
          <div>
          <img src="https://masdearte.com/media/n_ico_paisajes6.jpg" alt="imagen_Perfil" />
          <h2>{sessionStorage.getItem('idNombre')}</h2>
          </div>
          
        </div>

 
        <nav className='barra__navegacion'>
          <ul className='barra__navegacionRutas'>
            <div>

             
              <li>
                <img src={money} />
                <Link className='barra__navegacionRutasAb' to="#">Servicios</Link>
              </li>
     
              <li>
                <img src={tratamiento} />
                <Link className='barra__navegacionRutasAb'  to="#">Tratamiento</Link>
              </li>
              <li>
                <img src={historial} />
                <Link className='barra__navegacionRutasAb' to="/consulta">Historial Medico</Link>
              </li>
              <li>
                <img src={money} />
                <Link className='barra__navegacionRutasAb' to="/consulta">Consulta</Link>
              </li>

              <li>
              <img src={userIcon} />
               <DropdownG/>
              </li>

            </div>
            <div>
              <li>
                <img src={cerrarSesion} />
                <a className='barra__navegacionRutasAb' onClick={logout}>Cerrar Sesion</a>
              </li>
            </div>


          </ul>
        </nav>
      </div>

    </aside>
  )
}

export default Sidebar