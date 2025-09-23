import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFEBD9',
  blue: '#67A7E6'
}

export const breakpoints = {
  desktop: '990px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
