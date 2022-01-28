import { Navbar, Container, Nav } from "react-bootstrap";
import { StyledNavbar, StyledBrand, StyledNavLink } from "./styled";

const MainNavigation = () => {
  return (
    <StyledNavbar bg="light" expand="lg">
      <Container>
        <StyledBrand href="#home">TGL</StyledBrand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="me-auto">
            <StyledNavLink href="#home">Home</StyledNavLink>
          </Nav>
          <Nav>
            <StyledNavLink href="#">Account</StyledNavLink>
            <StyledNavLink eventKey={2} href="#">
              Logout -
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default MainNavigation;
