import axios from "axios";



async function getUsuarios(){
  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('_auth')}`;
    const baseUrl=import.meta.env.VITE_BASE_URL;
    const url = baseUrl + "api/Pacientes";
    const response = await axios.get(url);
    return response.data
  } catch (error) {
    return error
  }
 
}



export const usuarioApis={
  getUsuarios

}