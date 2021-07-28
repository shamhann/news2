import React from 'react';
import {BrowserRouter,Switch , Route, Redirect} from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import { useSelector } from "react-redux"

function App (props) {
  const token = useSelector(state => state.token);

  let routes ;

  if (token) {
    routes = (
      <Switch>
        <Route path="/contacts" component={HomePage}/>
        <Redirect to="contacts"/>
      </Switch>
    )
  }
  else {
    routes = (
      <Switch>
        <Route path="/login" component={Login}/>
        <Redirect to="/login"/>
      </Switch>
    )
  }

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App