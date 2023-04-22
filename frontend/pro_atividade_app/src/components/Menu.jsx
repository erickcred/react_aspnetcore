import * as B from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <B.Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="navbar-dark sticky-top"
    >
      <B.Container>
        <B.Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          Atividades
        </B.Navbar.Brand>
        <B.Navbar.Toggle aria-controls="basic-nav-bar-nav" />
        <B.Navbar.Collapse id="basic-navbar-nav">
          <B.Nav className="me-auto">
            <B.Nav.Link as={NavLink} className="nav-link" to="/cliente">
              Clientes
            </B.Nav.Link>
            <B.Nav.Link as={NavLink} className="nav-link" to="/atividade">
              Atividades
            </B.Nav.Link>
          </B.Nav>
          <B.Nav>
            <B.NavDropdown align="end" title="Erick" id="basic-nav-dropdown">
              <B.NavDropdown.Item href="#">Perfil</B.NavDropdown.Item>
              <B.NavDropdown.Item href="#">Configurações</B.NavDropdown.Item>
              <B.NavDropdown.Divider />
              <B.NavDropdown.Item href="#">Sair</B.NavDropdown.Item>
            </B.NavDropdown>
          </B.Nav>
        </B.Navbar.Collapse>
      </B.Container>
    </B.Navbar>
  )
}

export default Menu
