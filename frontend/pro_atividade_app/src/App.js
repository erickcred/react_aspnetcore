import { useEffect, useState } from 'react'
import * as B from 'react-bootstrap'
import './App.css'
import AtividadeForm from './components/AtividadeForm'
import AtividadeLista from './components/AtividadeLista'
import api from './api/atividade'

function App() {
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({ id: 0 })
  const [showAtividadeModal, setShowAtividadeModal] = useState(false)
  const [showModalDeletar, setShowModalDeletar] = useState(false)

  const toggleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal)
  const toggleModalDeletar = (id) => {
    if (id !== 0 && id !== undefined) {
      const atividade = atividades.filter((atividade) => atividade.id === id)
      setAtividade(atividade[0])
    } else {
      setAtividade({ id: 0 })
    }
    setShowModalDeletar(!showModalDeletar)
  }

  const pegaTodasAtividades = async () => {
    const response = await api.get('atividade')
    return response.data
  }
  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades()
      if (todasAtividades) setAtividades(todasAtividades)
    }
    getAtividades()
  }, [])

  const addAtividade = async (atividade) => {
    const response = await api.post('atividade', atividade)
    setAtividades([...atividades, response.data])
    toggleAtividadeModal()
  }

  const deletarArtividade = async (id) => {
    toggleModalDeletar(0)
    if (await api.delete(`atividade/${id}`)) {
      const atividadesFiltradas = atividades.filter((ativ) => ativ.id !== id)
      setAtividades([...atividadesFiltradas])
    }
  }

  const atualizarAtividade = async (atividade) => {
    const response = await api.put(`atividade/${atividade.id}`, atividade)
    if (response) {
      setAtividades(
        atividades.map((item) => (item.id === atividade.id ? atividade : item))
      )
      setAtividade({ id: 0 })
      toggleAtividadeModal()
    }
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 })
    toggleAtividadeModal()
  }

  function editarAtividade(id) {
    const atividade = atividades.filter((ativ) => ativ.id === id)
    setAtividade(atividade[0])
    toggleAtividadeModal()
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center sticky-top bg-white mt-2 mb-3 pt-2 pb-3 border-bottom border-1">
        <h1 className="p-0 m-0">Atividades</h1>
        <B.Button variant="outline-secondary" onClick={toggleAtividadeModal}>
          <i className="fas fa-plus"></i>
        </B.Button>
      </div>

      <B.Modal show={showAtividadeModal} onHide={toggleAtividadeModal}>
        <B.Modal.Header closeButton>
          <B.Modal.Title>
            <h5 className="p-0 m-0">
              {atividade.id !== 0 ? `Editando: ${atividade.id}` : 'Cadastrar'}
            </h5>
          </B.Modal.Title>
        </B.Modal.Header>

        <B.Modal.Body>
          <AtividadeForm
            addAtividade={addAtividade}
            cancelarAtividade={cancelarAtividade}
            atualizarAtividade={atualizarAtividade}
            atividadeSelecionada={atividade}
            atividades={atividades}
          />
        </B.Modal.Body>
      </B.Modal>

      <B.Modal show={showModalDeletar} onHide={toggleModalDeletar}>
        <B.Modal.Header closeButton>
          <B.Modal.Title>
            <h5 className="p-0 m-0">Deseja realmente excluir a Atividade</h5>
          </B.Modal.Title>
        </B.Modal.Header>

        <B.Modal.Body>
          <p>
            <span>Id: {atividade.id}</span> <br />
            <span>Título: {atividade.titulo}</span>
          </p>
        </B.Modal.Body>

        <B.Modal.Footer>
          <B.Button
            variant="outline-success"
            className="me-2"
            onClick={() => deletarArtividade(atividade.id)}
          >
            <i className="fas fa-check me-2"></i>
            Sim
          </B.Button>
          <B.Button variant="danger" onClick={() => toggleModalDeletar(0)}>
            <i className="fas fa-times me-2"></i>
            Cancelar
          </B.Button>
        </B.Modal.Footer>
      </B.Modal>

      <AtividadeLista
        atividades={atividades}
        editarAtividade={editarAtividade}
        toggleModalDeletar={toggleModalDeletar}
      />
    </div>
  )
}

export default App
