import * as B from 'react-bootstrap'

const Menu = () => {
  return (
    <B.Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="sticky-top bg-white"
    >
      <B.Container>
        <B.Navbar.Brand href="#">Atividades</B.Navbar.Brand>
        <B.Navbar.Toggle aria-controls="basic-nav-bar-nav" />
        <B.Navbar.Collapse id="basic-navbar-nav">
          <B.Nav className="me-auto">
            <B.Nav.Link href="#">Clientes</B.Nav.Link>
            <B.Nav.Link href="#">Atividades</B.Nav.Link>
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
