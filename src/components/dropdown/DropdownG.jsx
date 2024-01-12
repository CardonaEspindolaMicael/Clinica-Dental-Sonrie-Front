import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DropdownG.css';

const DropdownG = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    navigate(event.target.value);
  };

  return (
    <select onChange={handleChange} >
      <option value="/paciente">Pacientes</option>
      <option value="#" >Consultas</option>
      <option value="#">Moribundos</option>
    </select>
  );
};

export default DropdownG;
