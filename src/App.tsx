import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import lightTheme from './themes/light';
import darkTheme from './themes/dark';
import ToDoLayout from './components/ToDoLayout';

const themeMode: {[key: string]: any} = {
  light: lightTheme,
  dark: darkTheme
};

function App() {
  const isDarkModePreferred = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState(isDarkModePreferred);
  const theme = isDarkMode ? 'dark' : 'light';

  function changeTheme() {
    setIsDarkMode(prev => !prev);
  }

  return (
    <ThemeProvider theme={themeMode[theme]}>
      <GlobalStyle />
      <ToDoLayout isDarkMode={isDarkMode} onToggleMode={changeTheme} />
    </ThemeProvider>
  );
}

export default App;
