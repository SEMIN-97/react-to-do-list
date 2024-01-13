import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #EBEBEB;
    color: #27272A;
    font-family: 'Noto Sans KR', serif;
    font-weight: normal;
    font-style: normal;
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
    cursor: pointer;
  }
`;
