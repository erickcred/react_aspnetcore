import * as B from 'react-bootstrap'

import TitlePage from '../../components/TitlePage'

const DashBoard = () => {
  return (
    <div className="container">
      <TitlePage title="DashBoard"></TitlePage>

      <div className="mt-3">
        <B.Row>
          <B.Col>
            <B.Card border="success">
              <B.Card.Header>Clientes atuais</B.Card.Header>
              <B.Card.Body>
                <B.Card.Title>
                  <h5 className="text-center">25</h5>
                </B.Card.Title>
              </B.Card.Body>
            </B.Card>
          </B.Col>

          <B.Col>
            <B.Card border="secondary">
              <B.Card.Header>Atividades totais</B.Card.Header>
              <B.Card.Body>
                <B.Card.Title>
                  <h5 className="text-center">256</h5>
                </B.Card.Title>
              </B.Card.Body>
            </B.Card>
          </B.Col>

          <B.Col>
            <B.Card border="warning">
              <B.Card.Header>Atividades urgentes</B.Card.Header>
              <B.Card.Body>
                <B.Card.Title>
                  <h5 className="text-center">25</h5>
                </B.Card.Title>
              </B.Card.Body>
            </B.Card>
          </B.Col>

          <B.Col>
            <B.Card border="danger">
              <B.Card.Header>Atividades atrasadas</B.Card.Header>
              <B.Card.Body>
                <B.Card.Title>
                  <h5 className="text-center">2</h5>
                </B.Card.Title>
              </B.Card.Body>
            </B.Card>
          </B.Col>
        </B.Row>
      </div>
    </div>
  )
}

export default DashBoard
