import { createGlobalStyle } from "styled-components";
import HelveticaNeue from '../fonts/HelveticaNeue.woff'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Helvetica Neue';
  src: url(${HelveticaNeue}) format('woff');
}
`;

export default FontStyles;