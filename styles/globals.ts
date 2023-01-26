import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
     --blue: #0F52BA;
     --white: #FFFFFF;
     --black: #373737;
     --lightGray: #E5E5E5;
     --darkGray: #EEEEEE;
 }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  html,body {
    width: 100vw;
    height: 100vh;
  }
  body {
    background-color: var(--lightGray);
    overflow-x: hidden;
  }
`;
