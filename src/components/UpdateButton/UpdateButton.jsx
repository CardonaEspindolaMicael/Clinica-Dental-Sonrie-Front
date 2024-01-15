import './UpdateButton.css'
import { Link, useNavigate } from "react-router-dom";

export const UpdateButton = ({
  titulo = "Update",
  navigateTo="/",
  object,
  identificador,
  backgroundColorButton = "#b62cec", 
  colorTextButton = "#fff", 
  heighButton = "20px",
  widthButton = "100%",
  OnClickFn,
}) => {
  const navigate = useNavigate();
  console.log(object)
  return OnClickFn ? (
    <div
      onClick={OnClickFn}
      className="containerButton__Update"
      style={{ "--backgroundColorButton__Update": backgroundColorButton, "--heighButton": heighButton, "--widthButton": widthButton }}
    >
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </div>
  ) : (
    <div 
    onClick={() => navigate(navigateTo, { state: { objeto: object, identificador: identificador } })}
      className="containerButton__Update"
      style={{ "--backgroundColorButton__Update": backgroundColorButton, "--heighButton": heighButton, "--widthButton": widthButton }}
    >
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </div>
  );
};

export default UpdateButton;
