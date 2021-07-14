import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    font-size: 62.5%;
    color: #6e6e6e;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: auto;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  body {
    width: 100%;
    height: 100%;
  }
`

export { GlobalStyle }
