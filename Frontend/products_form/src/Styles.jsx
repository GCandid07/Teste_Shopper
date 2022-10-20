import { createGlobalStyle } from "styled-components";
import background from "./assets/shop-background.jpg"

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed
  }
`;
