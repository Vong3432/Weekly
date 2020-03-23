import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './global/GlobalStyles'

// components
import Navbar from './components/Navbar'

// router
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/Main';
import Detail from './pages/Detail';
import CreateActivityPage from './pages/CreateActivityPage';
import ActivityContextProvider from './contexts/ActivityContext';
import DayContextProvider from './contexts/DayContext';
import EditActivityPage from './pages/EditActivityPage';

function App() {
  
  const [ theme, setTheme ] = useState('light')

  useEffect(() => {
    const localTheme = localStorage.getItem('defaultTheme');

    if(localTheme)
      setTheme(localTheme)

  }, [])

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark')
      localStorage.setItem('defaultTheme', 'dark');
    }
    else {
      setTheme('light');    
      localStorage.setItem('defaultTheme', 'light');
    }      
  }  

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DayContextProvider>
        <ActivityContextProvider>
          <div className="App">
            <GlobalStyles />
            <Router>
              <Navbar toggleTheme={toggleTheme} theme={theme} />
                <Switch>
                  <Route path="/" exact component={Main} />
                  <Route path="/detail" component={Detail} />
                  <Route path="/create" component={CreateActivityPage} />
                  <Route path="/edit/:id" component={EditActivityPage} />
                </Switch>
            </Router>        
          </div>
        </ActivityContextProvider>
      </DayContextProvider>
    </ThemeProvider>    
  );
}

export default App;
