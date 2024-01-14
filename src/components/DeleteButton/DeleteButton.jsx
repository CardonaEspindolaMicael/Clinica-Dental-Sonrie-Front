import React from 'react';
import './DeleteButton.css';
import { usuarioApis } from '../../apis/apiUsuario';

export const DeleteButton = ({
  titulo = "Eliminar",
  endpoint="api/Pacientes/Delete",
  identificador,
  elimino="false",
  backgroundColorButton = "#f53615", 
  colorTextButton = "#fff", 
  OnClickFn,
}) => {
  const puntoFinal=`${endpoint}/${identificador}`
  console.log(puntoFinal)
  const fetchUsers = async () => {
    try {
      await usuarioApis.deleteCommon(puntoFinal);
      elimino(true)
    } catch (error) {
      console.log(error);
    
    }
  }

  return (
    <div
      onClick={OnClickFn ? OnClickFn : fetchUsers}
      className="containerButton__delete"
      style={{ "--backgroundColorButton": backgroundColorButton }}
    >
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </div>
  );
};

export default DeleteButton;
