import React, { useState, useEffect, useLayoutEffect } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Main from './pages/Main';
import Detail from './pages/Detail';
import CreateActivityPage from './pages/CreateActivityPage';
import EditActivityPage from './pages/EditActivityPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const RoutesWrapper = (props) => {  
  
    const [mounted, setMounted] = useState(false)

    useEffect(() => {

      setTimeout(() => setMounted(true), 0) 
      
      window.scrollTo({top: 0})

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

    }, [props.location.pathname])    

    // Animate Main.js 
    
    return (      
      <TransitionGroup>
        <CSSTransition appear={true} in={mounted} key={props.location.pathname} timeout={300} unmountOnExit mountOnEnter classNames="page-transition">
          <Switch location={props.location}>
            <Route exact path="/" component={Main} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/create" component={CreateActivityPage} />
            <Route exact path="/edit/:id" component={EditActivityPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
  
export default withRouter(RoutesWrapper)