import React from 'react';

import GlobalFonts from './fonts/fonts';
import GlobalStyle from './styles/GlobalStyle';
import ToDoLayout from './components/ToDoLayout';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <ToDoLayout />
    </>
  );
}

export default App;
