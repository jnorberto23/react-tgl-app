import styled from "styled-components";
import { Button } from 'react-bootstrap'

export const StyledButton = styled(Button)`
  margin: 0px 5px 15px 5px;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border: 2px solid #ADC0C4;
  color:  #ADC0C4;
  border-radius: 100%;
  &:hover {
    border: 2px solid red;
    color: red;
  };
  &:active {
    background-color: #ADC0C4
  };
  &:focus {
    box-shadow:none !important;
    background-color: #ADC0C4;
    border: 2px solid #ADC0C4;
    color: #fff
  }
`;  