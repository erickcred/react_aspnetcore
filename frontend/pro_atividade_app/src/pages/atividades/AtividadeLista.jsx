import AtividadeItem from './AtividadeItem'

const AtividadeLista = (props) => {
  return (
    <div className="mt-3 container">
      <div className="row gap-4 justify-content-md-evelyn justify-content-sm-center">
        {props.atividades.map((ativ) => (
          <AtividadeItem
            key={ativ.id}
            id={ativ.id}
            prioridade={ativ.prioridade}
            titulo={ativ.titulo}
            descricao={ativ.descricao}
            toggleModalDeletar={props.toggleModalDeletar}
            editarAtividade={props.editarAtividade}
          />
        ))}
      </div>
    </div>
  )
}

export default AtividadeLista
