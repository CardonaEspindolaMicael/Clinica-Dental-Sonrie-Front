import { Link, useNavigate } from "react-router-dom";
import I_Ir from '/ICONS/IR.svg'

export const IrButton = ({
  navigateTo = "/",
  object,
  identificador,
  OnClickFn,
}) => {
  const navigate = useNavigate();
  return OnClickFn ? (
    <button onClick={OnClickFn}
      style={{ height: '35px' }}
      type="button" className="btn btn-secondary">
      <img
        style={{ height: '25px', width: '25px' }}
        src={I_Ir} alt="" />
    </button>
  ) : (

    <button
      style={{ height: '35px' }}
      onClick={() => navigate(navigateTo, { state: { objeto: object, identificador: identificador } })}
      type="button" className="btn btn-secondary">
      <img
        style={{ height: '25px', width: '25px' }}
        src={I_Ir} alt="" />
    </button>
  );
};
export default IrButton;
