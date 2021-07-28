import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Entrance from './Entrance'
import News from './News'
import Home from './Home'
import Sports from './Sports'


function Main (props) {
  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/news'>
          <News/>
        </Route>

        <Route path='/entrance'>
          <Entrance/>
        </Route>

        <Route path='/sport'>
          <Sports/>
        </Route>

      </Switch>
    </div>
  )
}

export default Main