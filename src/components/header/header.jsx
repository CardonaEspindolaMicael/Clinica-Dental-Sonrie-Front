import React from 'react'
import "./header.css"
const Header = () => {
  const currentDate= new Date();
  return (
    <header className='header5'>
      <div className='titulo_empresa'>
        <h1>{`${currentDate.getDate()}/ ${currentDate.getMonth()+1}/${currentDate.getFullYear()}`}</h1>
      </div>
      <div className='cargo_usuario'>
        <h1>{sessionStorage.getItem('rolUsuario')}</h1>
        <img src='https://ih0.redbubble.net/image.4444575775.6216/raf,360x360,075,t,fafafa:ca443f4786.jpg'/>
      </div>
    </header>
  )
}

export default Header