import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledBrand = styled(Navbar.Brand)`
  color: #707070;
  text-align: center;
  font: italic bold 34px Helvetica Neue;
  letter-spacing: 0px;
  opacity: 1;
  border-bottom: 6px solid #b5c401;
  padding: 0px 15px 0px 15px;
`;

export const StyledNavLink = styled(Nav.Link)`
  font: italic normal bold 16px Helvetica Neue;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
`;

export const StyledNavbar = styled(Navbar)`
  border-bottom: 1px solid black;
  border: 2px solid #ebebeb;
  padding-bottom: 0px;
  opacity: 1;
`;
