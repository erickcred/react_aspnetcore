const AtividadeItem = (props) => {
  function prioridadeLabel(param) {
    switch (param) {
      case 'Baixa':
      case 'Normal':
      case 'Alta':
        return param
      default:
        return 'Não definida'
    }
  }

  function prioridadeStyle(param, icone) {
    switch (param) {
      case 'Baixa':
        return icone ? 'smile' : 'success'
      case 'Normal':
        return icone ? 'meh' : 'dark'
      case 'Alta':
        return icone ? 'frown' : 'danger'
      default:
        return icone ? '' : 'secondary'
    }
  }

  return (
    <div
      className={
        'card shadow-sm col-md-12 border-' + prioridadeStyle(props.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex flex-md-column justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary">{props.id}</span>
            <span> - {props.titulo}</span>
          </h5>
          <h6>
            Prioridade:
            <span className={'ms-2 text-' + prioridadeStyle(props.prioridade)}>
              <i
                className={
                  'me-1 fs-4 far fa-' + prioridadeStyle(props.prioridade, true)
                }
              ></i>
              {prioridadeLabel(props.prioridade)}
            </span>
          </h6>
        </div>
        <hr className={'w-25 border-' + prioridadeStyle(props.prioridade)} />
        <p className="card-text mt-4">{props.descricao}</p>

        <div
          className={
            'd-flex justify-content-end border-top pt-3 border-' +
            prioridadeStyle(props.prioridade)
          }
        >
          <button
            className="btn btn-sm btn-outline-primary me-2"
            onClick={() => props.editarAtividade(props.id)}
          >
            <i className="me-1 fas fa-pen"></i>
            Editar
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => props.toggleModalDeletar(props.id)}
          >
            <i className="me-1 fas fa-trash"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  )
}

export default AtividadeItem
