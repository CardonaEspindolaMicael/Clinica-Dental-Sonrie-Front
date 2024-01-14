import React from 'react'
import "./header.css"
const Header = () => {
  const currentDate= new Date();
  return (
    <header className='header5'>

      <label className="form-label titulo_fecha" htmlFor="">Fecha: {`${currentDate.getDate()}/ ${currentDate.getMonth()+1}/${currentDate.getFullYear()}`}</label>
      <label className="form-label cargo_rol" htmlFor="">Rol: {sessionStorage.getItem('rolUsuario')}</label>
     
    </header>
  )
}

export default Header