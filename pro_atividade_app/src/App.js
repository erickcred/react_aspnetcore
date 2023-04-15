import { useEffect, useState } from 'react'
import './App.css'
import AtividadeForm from './components/AtividadeForm'
import AtividadeLista from './components/AtividadeLista'

function App() {
  const [atividades, setAtividades] = useState([])
  const [atividade, setAtividade] = useState({ id: 0 })
  const [index, setIndex] = useState(0)

  useEffect(() => {
    atividades.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            atividades.map((item) => item.id)
          ) + 1
        )
  }, [atividades])

  function addAtividade(atividade) {
    setAtividades([...atividades, { ...atividade, id: index }])
  }

  function deletarArtividade(id) {
    const atividadesFiltradas = atividades.filter((ativ) => ativ.id !== id)
    setAtividades([...atividadesFiltradas])
  }

  function atualizarAtividade(atividade) {
    setAtividades(
      atividades.map((item) => (item.id === atividade.id ? atividade : item))
    )
    setAtividade({ id: 0 })
  }

  function cancelarAtividade() {
    setAtividade({ id: 0 })
  }

  function editarAtividade(id) {
    const atividade = atividades.filter((ativ) => ativ.id === id)

    setAtividade(atividade[0])
  }

  return (
    <div className="container">
      <AtividadeForm
        addAtividade={addAtividade}
        cancelarAtividade={cancelarAtividade}
        atualizarAtividade={atualizarAtividade}
        atividadeSelecionada={atividade}
        atividades={atividades}
      />

      <AtividadeLista
        atividades={atividades}
        deletarArtividade={deletarArtividade}
        editarAtividade={editarAtividade}
      />
    </div>
  )
}

export default App
