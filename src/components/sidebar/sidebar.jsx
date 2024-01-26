import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import Dropdown from '../DROPDOWN/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./sidebar.css"
import Img_Logo from '/IMG/LOGO.png'

/*ICONOS*/
import I_Paciente from '/ICONS/PACIENTE.svg'
import I_Config from '/ICONS/CONFIGURACIONES.svg'
import I_Doctores from '/ICONS/USUARIOS.svg'
import I_Hospital from '/ICONS/HOSPITAL.svg'
import I_Salir from '/ICONS/SALIR.svg'
import I_Lista from '/ICONS/LISTA.svg'
import I_Folder from '/ICONS/FOLDER_2.svg'
import I_Servicios from '/ICONS/SERVICIOS.svg'
import I_Dolar from '/ICONS/DOLAR.svg'
import I_Archivos from '/ICONS/FOLDER.svg'
import I_Obciones from '/ICONS/OBCIONES.svg'
import I_Desplegar from '/ICONS/DESPLEGAR_2.svg'
import I_Consulta from '/ICONS/CONSULTA.svg'
import I_Check from '/ICONS/CHECK.svg'
import I_Captura from '/ICONS/CAPTURA.svg'
import I_Calculos from '/ICONS/CALCULOS.svg'
import I_Cuaderno from '/ICONS/CUADERNO.svg'
import I_Menu from '/ICONS/MENU.svg'
import I_Receta from '/ICONS/RECETA.svg'
import I_Usuarios_2 from '/ICONS/USUARIOS_2.svg'





const Sidebar = () => {
  const role = sessionStorage.getItem('rolUsuario');/*----*/
  const signOut = useSignOut();
  const navigate = useNavigate();

  const pacientes = [
    { icon: I_Paciente, path: '/paciente', text: 'Pacientes' },
  ];
  const herramientas = [

    { icon: I_Hospital, path: '#', text: 'Sucursales' },
    { icon: I_Doctores, path: '/doctores', text: 'Doctores' },
  ];
  const historiasClinicas = [
    { icon: I_Folder, path: '/historias', text: 'Historiales' },
    { icon: I_Archivos, path: '#', text: 'Planes de T.' },
    { icon: I_Check, path: '#', text: 'Procedimientos' },
  ];
  const pagos = [
    { icon: I_Dolar, path: '#', text: 'Registrar Pago' },
    { icon: I_Calculos, path: '#', text: 'Recibos' },
  ];
  const consultas = [
    { icon: I_Consulta, path: '/consulta', text: 'Consultas' },
    { icon: I_Obciones, path: '#', text: 'Proforma' },
  ];
  const servicios = [
    { icon: I_Servicios, path: '/servicio', text: 'Servicios' },
    { icon: I_Obciones, path: '/Tratamientos', text: 'Tratamientos' },
  ];
  const usuarios = [
    { icon: I_Usuarios_2, path: '/usuarios', text: 'Usuarios' },
    { icon: I_Usuarios_2, path: '#', text: 'Contraceñas' },
  ];
  const miCuenta = [
    { icon: I_Usuarios_2, path: '/miCuenta', text: 'Mi Cuenta' },
  ];

  const logout = () => {
    signOut();
    sessionStorage.removeItem('idUsuario')
    sessionStorage.removeItem('rolUsuario')
    sessionStorage.removeItem('idNombre')
    navigate("/")

  }
  return (
    <aside className='Sidebar'>
      <div className="container__sidebar">
        <div className='datos__user'>
          <img src={Img_Logo} alt="logo_clinica" />
        </div>
        <nav >
          <ul className='barra__navegacion'>
            <h5>MENU</h5>

            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Pacientes" links={pacientes} icon={I_Menu} />
              </li>
            )}
            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Consultas" links={consultas} icon={I_Menu} />
              </li>
            )}
            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Historias Clinicas" links={historiasClinicas} icon={I_Menu} />
              </li>
            )}

            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Pagos" links={pagos} icon={I_Menu} />
              </li>
            )}
            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Servicios" links={servicios} icon={I_Menu} />
              </li>
            )}
            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Herramientas" links={herramientas} icon={I_Menu} />
              </li>
            )}
            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Usuarios" links={usuarios} icon={I_Menu} />
              </li>
            )}
            {role == 'ADMIN' && (
              <li>
                <Dropdown title="Cuenta" links={miCuenta} icon={I_Menu} />
              </li>
            )}
          </ul>
        </nav>
        <div className='usuarioNombre'>
          <div className='usuarioNombre__botton'>
            <img src={I_Salir} />
            <a className='barra__navegacionRutasAb' onClick={logout}>Cerrar Sesion</a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
