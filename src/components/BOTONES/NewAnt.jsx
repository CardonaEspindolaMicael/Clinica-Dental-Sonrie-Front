import { Link, useNavigate } from "react-router-dom";
import I_Ir from '/ICONS/IR.svg'

export const NewAntButton = ({
  navigateTo = "/",
  identificador,
  titulo,
  OnClickFn,
}) => {
  const navigate = useNavigate();
  return OnClickFn ? (
    <button onClick={OnClickFn}
      type="button" className="btn btn-outline-info">
      {titulo}
    </button>
  ) : (

    <button
      onClick={() => navigate(navigateTo, { state: { identificador: identificador } })}
      type="button" className="btn btn-outline-info">
          {titulo}
    </button>
  );
};
export default NewAntButton;
