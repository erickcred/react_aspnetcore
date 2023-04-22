import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as B from 'react-bootstrap'

import TitlePage from '../../components/TitlePage'

const clientes = [
  {
    id: 1,
    nome: 'Goggle',
    responsavel: 'Willian S',
    telefone: 912341234,
    situacao: 'ativo'
  },
  {
    id: 2,
    nome: 'Facebook',
    responsavel: 'Mike T',
    telefone: 922221321,
    situacao: 'ativo'
  },
  {
    id: 3,
    nome: 'Microsoft',
    responsavel: 'Bily R',
    telefone: 918881234,
    situacao: 'ativo'
  },
  {
    id: 4,
    nome: 'Twitter',
    responsavel: 'Bily B',
    telefone: 918881234,
    situacao: 'desativado'
  },
  {
    id: 5,
    nome: 'Spotfy',
    responsavel: 'Bily A',
    telefone: 918881234,
    situacao: 'em analise'
  }
]

const ClienteLista = () => {
  const [termoBusca, setTermoBusca] = useState('')
  const navigate = useNavigate()

  const inputBuscaCliente = (event) => {
    setTermoBusca(event.target.value)
  }

  const clienteFiltrados = clientes.filter((cliente) => {
    return (
      // cliente.nome.toLowerCase().indexOf(termoBusca.toLowerCase()) !== -1 ||
      // cliente.responsavel.toLowerCase().indexOf(termoBusca.toLowerCase()) !== -1
      Object.values(cliente)
        .join(' ')
        .toLowerCase()
        .includes(termoBusca.toLowerCase())
    )
  })

  const novoCliente = () => {
    navigate('/cliente/detalhe')
  }

  return (
    <div className="container">
      <TitlePage title="Clientes">
        <B.Button variant="outline-secondary" onClick={novoCliente}>
          <i className="fas fa-plus"></i>
        </B.Button>
      </TitlePage>

      <B.InputGroup className="mb-3">
        <B.InputGroup.Text>Buscar: </B.InputGroup.Text>
        <B.FormControl
          onChange={inputBuscaCliente}
          placeholder="Nome do cliente"
        />
      </B.InputGroup>

      <div className="table-responsive">
        <table className="table mt-3 table-hover">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Responsável</th>
              <th>Telefone</th>
              <th>Situação</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {clienteFiltrados.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.responsavel}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.situacao}</td>
                <td>
                  <div>
                    <button
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => navigate(`/cliente/detalhe/${cliente.id}`)}
                    >
                      <i className="fas fa-user-edit me-2"></i>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      <i className="fas fa-user-times me-2"></i>
                      Desativar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClienteLista
