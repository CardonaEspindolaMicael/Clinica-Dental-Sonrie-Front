import React from 'react';

const SearchFilter = ({ value, onChange, placeholder }) => {
  return (
    <input className='pacienteContainer__filtrarPaciente' type='text' value={value} onChange={onChange} placeholder={placeholder}/>
  );
};

export default SearchFilter;