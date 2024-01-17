import { BrowserRouter, Route, Routes } from "react-router-dom"
import './app.css'
import Login from "./views/login/login"
import Dashboard from "./views/dashboard/dashboard"
import NotFound from "./components/notFound/notFound"
import AuthProvider from "react-auth-kit/AuthProvider"
import createStore from "react-auth-kit/createStore"
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
import Consulta from "./views/consulta/Consulta"
import NuevaConsulta from "./views/consulta/NuevaConsulta/nuevaConsulta"
import Servicio from "./views/servicio/Servicio"
import { NuevoServicio } from "./views/servicio/NuevoServicio/NuevoServicio"
import ActualizarServicio from "./views/servicio/ActualizarServicio/ActualizarServicio"
import Doctores from "./views/doctores/Doctores"
import NuevoDoctor from "./views/doctores/NuevoDoctor/NuevoDoctor"
import ActualizarDoctor from "./views/doctores/ActualizarDoctor/ActualizarDoctor"
import Paciente from "./views/Paciente/Paciente"
import NuevoPaciente from "./views/Paciente/NuevoPaciente/NuevoPaciente"
import ActualizarPaciente from "./views/Paciente/ActualizarPaciente/ActualizarPaciente"




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
           <Route path="/paciente/nuevoPaciente" element={<Dashboard Contenido={<NuevoPaciente/>}/>} />
           <Route path="/paciente/actualizarPaciente" element={<Dashboard Contenido={<ActualizarPaciente/>}/>} />

           <Route path="/consulta" element={<Dashboard Contenido={<Consulta/>}/>} />
           <Route path="/consulta/nuevaConsulta" element={<Dashboard Contenido={<NuevaConsulta />}/>} />

           <Route path="/servicio" element={<Dashboard Contenido={<Servicio/>}/>} />
           <Route path="/servicio/nuevoServicio" element={<Dashboard Contenido={<NuevoServicio/>}/>} />
           <Route path="/servicio/actualizarServicio" element={<Dashboard Contenido={<ActualizarServicio/>}/>} />

           <Route path="/doctores" element={<Dashboard Contenido={<Doctores/>}/>} />
           <Route path="/doctores/nuevoDoctor" element={<Dashboard Contenido={<NuevoDoctor/>}/>} />
           <Route path="/doctores/actualizarDoctor" element={<Dashboard Contenido={<ActualizarDoctor/>}/>} />
           </Route>
           
           <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </BrowserRouter>

    </AuthProvider>

  </>
}

export default App
