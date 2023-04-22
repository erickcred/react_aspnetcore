import { Route, Routes } from 'react-router-dom'
import './App.css'

import DashBoard from './pages/dashboard/Dashboard'
import Atividade from './pages/atividades/Atividade'
import Cliente from './pages/clientes/Cliente'
import ClienteForm from './pages/clientes/ClienteForm'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/atividade" element={<Atividade />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/cliente/detalhe/:id?" element={<ClienteForm />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
