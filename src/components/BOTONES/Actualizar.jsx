import { Link, useNavigate } from "react-router-dom";
import I_Editar from '/ICONS/EDITAR_2.svg'

export const UpdateButton = ({
  navigateTo = "/",
  object,
  identificador,
  OnClickFn,

}) => {
  const navigate = useNavigate();
  return OnClickFn ? (
    <button onClick={OnClickFn}
      style={{ height: '35px' }}
      type="button" className="btn btn-warning col-6 ">
      <img
        style={{ height: '25px', width: '25px' }}
        src={I_Editar} alt="" />
    </button>
  ) : (

    <button
      style={{ height: '35px' }}
      onClick={() => navigate(navigateTo, { state: { objeto: object, identificador: identificador } })}
      type="button" className="btn btn-warning col-6">
      <img
        style={{ height: '25px', width: '25px' }}
        src={I_Editar} alt="" />
    </button>



  );
};

export default UpdateButton;
