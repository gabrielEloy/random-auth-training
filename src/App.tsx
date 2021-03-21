import React, { useState} from 'react';
import Routes from 'Routes';
import { ThemeProvider } from 'styled-components';
import * as THEMES from 'constants/theme';
import GlobalStyles from 'GlobalStyles';
import {ThemeContext} from 'contexts/themeContext';
interface Props {
  
}

type IDarkThemeState = 'main' | 'dark';

const App = (props: Props) => {
  const [theme, setTheme] = useState<IDarkThemeState>('main');

  const toggleTheme = () => theme === 'main' ?
  setTheme('dark') :
  setTheme('main')

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
    <ThemeProvider theme={THEMES[theme]}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
