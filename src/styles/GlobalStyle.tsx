import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-text: ${props => props.theme.color.text};
    --color-primary: ${props => props.theme.color.primary};
    --color-bg: ${props => props.theme.color.bg};
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #27272A;
    font-family: 'Noto Sans KR', serif;
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    background-color: #EBEBEB;
  }

  ol, ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  i {
    font-style: normal;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    
    &:disabled {
      cursor: default;
    }
  }
  
  input {
    background-color: transparent;
    border: 0;
  }

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
  }
`;
