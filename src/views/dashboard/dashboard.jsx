import React from 'react'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import './dashboard.css'

const Dashboard = ({Contenido}) => {
  return (
    <div className="container">
    <Header className="header"/>
    <Sidebar className="sidebar"/>
    <section>
     {Contenido} 
    </section>
  </div>   
  ) 
}

export default Dashboard