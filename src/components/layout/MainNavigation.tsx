import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledBrand = styled(Navbar.Brand)`
  color: #707070;
  text-align: center;
  font: italic bold 34px Helvetica Neue;
  letter-spacing: 0px;
  opacity: 1;
  border-bottom: 6px solid #b5c401;
  padding: 0px 15px 0px 15px;
`;

const StyledNavLink = styled(Nav.Link)`
  font: italic normal bold 16px Helvetica Neue;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;

const StyledNavbar = styled(Navbar)`
  border-bottom: 1px solid black;
  border: 2px solid #ebebeb;
  padding-bottom: 0px;
  opacity: 1;
`;

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
