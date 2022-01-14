import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Page/Home'
import Search from './Page/Search'
import Post from './Page/Post'
import Detail from './Page/Detail'
import Header from './Component/Header'
import Footer from './Component/Footer'
import User from './Page/User'
import Company from './Page/Company'
import Test from './Page/Test'
import WindowLogin from './Component/WindowLogin'
import { TextField } from '@material-ui/core'

function App() {
  const [image, setImage] = useState(null)
  const [account, setAccount] = useState(null)
  const [windowStatus, setWindowStatus] = useState(false)
  window.onclick = function(event) {
    if(event.target.className == 'windowlogin-modal'){
        setWindowStatus(false)
    }
  }

  function clickToAccount(){
    setWindowStatus(true)
  }

  useEffect(() => {
    setAccount(localStorage.getItem('account'))
    console.log(localStorage.getItem('account'))
  }, [])

  return (
    <>
      <WindowLogin windowStatus={windowStatus} setAccount={setAccount}/>
      <Header account={account} clickToAccount={clickToAccount} setAccount={setAccount}/>
        <Router>
          <Switch>
            <Route path='/search'>
              <Search/>
            </Route>
            <Route path='/post'>
              <Post/>
            </Route>
            <Route path='/detail'>
              <Detail/>
            </Route>
            <Route path='/staff'>
              <User/>
            </Route>
            <Route path='/company'>
              <Company/>
            </Route>
            <Route path='/test'>
              <Test/>
            </Route>
            <Route path='/'>
              <Home clickToAccount={clickToAccount}/>
            </Route>
          </Switch>
        </Router>
      <Footer/>
    </>
  );
}

export default App;
