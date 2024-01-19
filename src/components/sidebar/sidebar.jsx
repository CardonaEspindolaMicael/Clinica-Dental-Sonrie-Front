import React, { useState } from 'react'
import "./sidebar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import money from "/money.svg"
import historial from "/history.svg"
import paciente from "/paciente.svg"
import LogoutIcon from '/iconoCerrarSesion.svg'
import consulta from '/consulta.svg'
import factura from '/factura.svg'
import medicina from '/medicine.svg'
import doctor from '/doctor.svg'
import sucursal from '/sucursal.svg'
import tratamiento from '/tratamiento.svg'


import logo from '/logo.png'
import usuario from '/USER.png'
import Dropdown from '../Dropdown/Dropdown';

const Sidebar = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const links1 = [
    { icon: paciente, path: '/paciente', text: 'Pacientes' },
    { icon: consulta, path: '/consulta', text: 'Consultas' },
    { icon: factura, path: '#', text: 'Proforma' },
  ];
  const links2 = [
    { icon: paciente, path: '#', text: 'Servicios' },
    { icon: tratamiento, path: '#', text: 'Tratamientos' },
    { icon: sucursal, path: '#', text: 'Sucursales' },
    { icon: doctor, path: '/doctores', text: 'Doctores' },
    { icon: paciente, path: '#', text: 'Usuarios' },
  ];
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
        </div>
        <nav >
          <ul className='barra__navegacion'>
            <h5>MENU</h5>
            <Dropdown title="Overview" links={links1} />
            <li>
              <img src={money} />
              <Link className='barra__navegacionRutasAb' to="#">Pagos</Link>
            </li>
            <li>
              <img src={medicina} />
              <Link className='barra__navegacionRutasAb' to="#">Tratamiento</Link>
            </li>
            <li>
              <img src={historial} />
              <Link className='barra__navegacionRutasAb' to="/consulta">Historias Clinicas</Link>
            </li>
            <Dropdown title="Herramientas" links={links2} />
          </ul>
        </nav>
        <div className='usuarioNombre'>
          <h5>PROFILE</h5>
          <div className='usuarioNombre__top'>
            <img src={usuario} alt="imagen_Perfil" />
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
