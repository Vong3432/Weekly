import React, { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './global/GlobalStyles'

// components
import Navbar from './components/Navbar'

// router
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import ActivityContextProvider from './contexts/ActivityContext';
import DayContextProvider from './contexts/DayContext';
import UserContextProvider from './contexts/UserContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RoutesWrapper from './RoutesWrapper';

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('defaultTheme');

    if (localTheme)
      setTheme(localTheme)

  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('defaultTheme', 'dark');
    }
    else {
      setTheme('light');
      localStorage.setItem('defaultTheme', 'light');
    }
  }

  // const routes = [
  //   { path: '/', name: 'Main', Component: Main },
  //   { path: '/detail', name: 'Detail', Component: Detail },
  //   { path: '/create', name: 'CreateActivityPage', Component: CreateActivityPage },
  //   { path: '/edit/:id', name: 'EditActivityPage', Component: EditActivityPage },
  // ]

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DayContextProvider>
        <ActivityContextProvider>
          <UserContextProvider>
            <div className="App">
              <GlobalStyles />
              <Router>
                <Navbar toggleTheme={toggleTheme} theme={theme} />
                <RoutesWrapper />
              </Router>
            </div>
          </UserContextProvider>
        </ActivityContextProvider>
      </DayContextProvider>
    </ThemeProvider>
  );

}


export default App;
