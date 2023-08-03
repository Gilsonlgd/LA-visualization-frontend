import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    @import '~bootstrap/dist/css/bootstrap.min.css';
  }
`;

export default GlobalStyle;
