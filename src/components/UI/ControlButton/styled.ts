import styled from "styled-components";
import { Button } from 'react-bootstrap'

export const StyledButton = styled(Button)`
  background-color: ${(props: any) => props.opaque ? '#fff' : props.color};
  font-weight: bold;
  margin: 20px 5px 15px 5px;
  width: 150px;
  height: 40px;
  border-color:  ${(props: any) => props.color};
  border: 2px solid;
  color:  ${(props: any) => props.opaque ? props.color : '#fff'};
  border-radius: 10px;
  &:hover {
    background-color: ${(props: any) => props.opaque ? props.color : '#fff'};
    border-color:  ${(props: any) => props.color };
    color: ${(props: any) => props.opaque ? '#fff' : props.color};
  };
  &:focus {
    background-color: ${(props: any) => props.opaque ? props.color : '#fff'};
    border-color:  ${(props: any) => props.opaque ? props.color : '#fff'};
    box-shadow:none !important;
    color: #fff;
  }
`;  