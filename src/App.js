import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Calender from './components/Calender'
import SingleCalender from './components/SingleCalender'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Navbar />
          <Home />
        </Route>
        <Route exact path='/calender'>
          <Navbar2 />
          <Calender />
        </Route>
        <Route exact path='/calender/:id' children={<SingleCalender />} />
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
