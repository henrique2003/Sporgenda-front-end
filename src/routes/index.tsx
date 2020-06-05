import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '../pages'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/mais/:id" component={Home}/>
        <Route path="/login" component={Home}/>
        <Route path="/admin" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
