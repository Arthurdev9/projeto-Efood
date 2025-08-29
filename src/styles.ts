import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  branco: '#FFEBD9',
  azul: '#67A7E6'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
