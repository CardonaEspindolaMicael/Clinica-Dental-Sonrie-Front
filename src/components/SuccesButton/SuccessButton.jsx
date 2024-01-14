import './successButton.css'
import { Link, useNavigate } from "react-router-dom";

export const SuccessButton = ({
  titulo = "Agregar",
  navigateTo = "/",
  backgroundColorButton = "#A4ADB4", 
  colorTextButton = "#fff", 
  heighButton = "20px",
  widthButton = "100%",
  OnClickFn,
}) => {
  const navigate=useNavigate();
  return OnClickFn ? (
    <div
      onClick={OnClickFn}
      className="containerButton"
      style={{ "--backgroundColorButton": backgroundColorButton, "--heighButton": heighButton, "--widthButton": widthButton }}
    >
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </div>
  ) : (
    <Link 
      to={navigateTo}
      className="containerButton"
      style={{ "--backgroundColorButton": backgroundColorButton, "--heighButton": heighButton, "--widthButton": widthButton }}
    >
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </Link>
  );
};

export default SuccessButton;
