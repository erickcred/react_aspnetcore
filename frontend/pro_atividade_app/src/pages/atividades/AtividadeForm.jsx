import { useEffect, useState } from 'react'

const atividadeInicial = {
  id: 0,
  titulo: '',
  prioridade: '',
  descricao: ''
}

const AtividadeForm = (props) => {
  const [atividade, setAtividade] = useState({ atividadeAtual })

  useEffect(() => {
    if (props.atividadeSelecionada.id !== 0) {
      setAtividade(props.atividadeSelecionada)
    }
  }, [props.atividadeSelecionada])

  const inputTextHandler = (e) => {
    const { name, value } = e.target
    setAtividade({ ...atividade, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.atividadeSelecionada.id !== 0) {
      props.atualizarAtividade(atividade)
    } else {
      props.addAtividade(atividade)
    }
    setAtividade(atividadeInicial)
  }

  const handleCancelar = (e) => {
    e.preventDefault()

    props.cancelarAtividade()
    setAtividade(atividadeInicial)
  }

  function atividadeAtual() {
    if (props.atividadeSelecionada.id !== 0) {
      return props.atividadeSelecionada
    } else {
      return atividadeInicial
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6 col-sm-12" hidden>
            <label htmlFor="id" className="form-label">
              Id
            </label>
            <input
              type="text"
              name="id"
              className="form-control"
              onChange={inputTextHandler}
              value={atividade.id}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              className="form-control"
              value={atividade.titulo}
              onChange={inputTextHandler}
            />
          </div>

          <div className="col-md-6 col-sm-6">
            <label htmlFor="prioridade" className="form-label">
              Prioridade
            </label>
            <select
              id="prioridade"
              name="prioridade"
              className="form-select"
              value={atividade.prioridade}
              onChange={inputTextHandler}
            >
              <option value="Nao_Definido">Selecionar...</option>
              <option value="Baixa">Baixa</option>
              <option value="Normal">Normal</option>
              <option value="Alta">Alta</option>
            </select>
          </div>

          <div className="col-md-12">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              type="text"
              id="descricao"
              name="descricao"
              className="form-control"
              value={atividade.descricao}
              onChange={inputTextHandler}
            ></textarea>
            <hr />
          </div>

          <div className="col-12 text-start mt-0 mb-3">
            {props.atividadeSelecionada.id === 0 ? (
              <button type="submit" className="btn btn-outline-secondary">
                <i className="fas fa-plus me-2"></i>
                Atividades
              </button>
            ) : (
              <>
                <button type="submit" className="btn btn-outline-success me-3">
                  <i className="fa fa-pen-to-square me-2"></i>
                  Salvar
                </button>

                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={handleCancelar}
                >
                  <i className="fa-solid fa-xmark me-2"></i>
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  )
}

export default AtividadeForm
