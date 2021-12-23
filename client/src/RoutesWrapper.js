import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Main from './pages/Main';
import Detail from './pages/Detail';
import CreateActivityPage from './pages/CreateActivityPage';
import EditActivityPage from './pages/EditActivityPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Activities from './pages/Activities';

const RoutesWrapper = (props) => {  
  
    const [mounted, setMounted] = useState(false)
    const location = useLocation()

    useEffect(() => {

      setTimeout(() => setMounted(true), 0) 
      
      // window.scrollTo({top: 0})

      // var scrollToTop = window.setInterval(() => {
      //     var pos = window.pageYOffset;
          
      //     // document.body.style.overflowY = 'hidden'
          
      //     if(pos > 0) {            
      //       window.scrollTo(0, pos - 20);
      //     }              

      //     else {              
      //         // document.body.style.overflowY = 'scroll'
      //         window.clearInterval(scrollToTop);
      //     }
              
      // }, 5)

    }, [location.pathname])    

    // Animate Main.js 
    
    return (      
      <TransitionGroup>
        <CSSTransition appear={true} in={mounted} key={location.pathname} timeout={300} unmountOnExit mountOnEnter classNames="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/create" element={<CreateActivityPage />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/edit/:id" element={<EditActivityPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    )
  }
  
export default RoutesWrapper