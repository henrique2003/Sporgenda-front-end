import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, More } from '../pages'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/mais/:id" component={More}/>
        <Route path="/login" component={Home}/>
        <Route path="/admin" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
