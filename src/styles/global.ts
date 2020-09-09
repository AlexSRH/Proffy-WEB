import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    background-color: ${props => props.theme.background};
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
    color: ${props => props.theme.text.standard}
  }

  @media(min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`
