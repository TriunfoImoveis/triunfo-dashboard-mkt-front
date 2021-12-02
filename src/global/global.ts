import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  html,
  body {
    text-rendering: optimizeLegibility;
    --webki-font-smoothing: antialiazed;
    background-color: #f2f2f2;
    font-family: 'Inter', sans-serif;
  }

  body {
    height: 100vh;
    font-size: 1.6rem;
  }
`;
