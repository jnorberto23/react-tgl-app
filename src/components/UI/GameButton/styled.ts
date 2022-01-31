import styled from "styled-components";
import { Button } from 'react-bootstrap'

export const StyledButton = styled(Button)`
  background-color: #fff;
  margin: 0px 5px 15px 5px;
  width: 100px;
  border-color:  ${(props: any) => props.color};
  border: 2px solid;
  color:  ${(props: any) => props.color};
  border-radius: 50px;
  &:hover {
    background-color: ${(props: any) => props.color};
    border-color:  ${(props: any) => props.color};
    color: #fff
  };
  &:focus {
    background-color: ${(props: any) => props.color};
    border-color:  ${(props: any) => props.color};
    box-shadow:none !important;
    color: #fff;
  }
`;  