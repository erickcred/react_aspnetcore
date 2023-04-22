import { useNavigate } from 'react-router-dom'

import * as B from 'react-bootstrap'

import TitlePage from '../../components/TitlePage'

const ClienteForm = () => {
  const navigate = useNavigate()
  const voltar = () => {
    navigate('/cliente')
  }

  return (
    <div className="container">
      <TitlePage title="Cliente From">
        <B.Button variant="outline-secondary" onClick={voltar}>
          <i className="fas fa-arrow-left me-2"></i>
          Voltar
        </B.Button>
      </TitlePage>

      <div>formulário aqui</div>
    </div>
  )
}

export default ClienteForm
