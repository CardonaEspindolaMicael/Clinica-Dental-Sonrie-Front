import { BrowserRouter, Route, Routes } from "react-router-dom"
import './app.css'
import Login from "./views/login/login"
import Dashboard from "./views/dashboard/dashboard"
import NotFound from "./components/notFound/notFound"
import AuthProvider from "react-auth-kit/AuthProvider"
import createStore from "react-auth-kit/createStore"
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Paciente from "./components/Paciente/Paciente" 
import Consulta from "./views/consulta/Consulta"
import NuevoPaciente from "./components/Paciente/NuevoPaciente/NuevoPaciente"
import ActualizarPaciente from "./components/Paciente/ActualizarPaciente/ActualizarPaciente"




const store = createStore({
  authName:'_auth',
  authType:'localstorage',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});
function App() {

return <>


      <AuthProvider store={store}>
      <BrowserRouter>
        <Routes>
 
           <Route element={<AuthOutlet fallbackPath='/' />}>

           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/paciente" element={<Dashboard Contenido={<Paciente/>}/>} />
           <Route path="/consulta" element={<Dashboard Contenido={<Consulta/>}/>} />
           <Route path="/paciente/nuevoPaciente" element={<Dashboard Contenido={<NuevoPaciente/>}/>} />
           <Route path="/paciente/actualizarPaciente" element={<Dashboard Contenido={<ActualizarPaciente/>}/>} />
          
           </Route>
           
           <Route path="/" element={<Login />} />

          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </BrowserRouter>

    </AuthProvider>

  </>
}

export default App
