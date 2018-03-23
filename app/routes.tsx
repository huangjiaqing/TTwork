import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './base/'

const Error = () => <div>错误</div>

const RouterMap = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Layout}/>
      <Route exact path='/door' component={Layout}/>
      <Redirect path='/' to='/org'/>
    </Switch>
  </BrowserRouter>
)

export default RouterMap