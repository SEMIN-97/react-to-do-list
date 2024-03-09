import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-text: ${props => props.theme.text};
    --color-primary: ${props => props.theme.primary};
    --color-secondary: ${props => props.theme.secondary};
    --color-bg-body: ${props => props.theme.bgBody};
    --color-bg-app: ${props => props.theme.bgApp};
    --color-border-app: ${props => props.theme.borderApp};
    --color-progress-rail: ${props => props.theme.progressRail};
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: var(--color-text);
    font-family: 'Noto Sans KR', serif;
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    background-color: var(--color-bg-body);
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
