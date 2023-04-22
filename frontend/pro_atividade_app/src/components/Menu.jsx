import * as B from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

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
            <B.Nav.Link
              as={NavLink}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/cliente"
            >
              Clientes
            </B.Nav.Link>
            <B.Nav.Link
              as={NavLink}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/atividade"
            >
              Atividades
            </B.Nav.Link>
          </B.Nav>
          <B.Nav>
            <B.NavDropdown align="end" title="Erick" id="basic-nav-dropdown">
              <B.NavDropdown.Item as={Link} to="#">
                Perfil
              </B.NavDropdown.Item>
              <B.NavDropdown.Item as={Link} to="#">
                Configurações
              </B.NavDropdown.Item>

              <B.NavDropdown.Divider />

              <B.NavDropdown.Item as={Link} to="#">
                Sair
              </B.NavDropdown.Item>
            </B.NavDropdown>
          </B.Nav>
        </B.Navbar.Collapse>
      </B.Container>
    </B.Navbar>
  )
}

export default Menu
