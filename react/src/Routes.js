import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/posts" component={Posts}/>
      <Route path="/posts/:id/:author" component={Post}/>
      <Route component={NotFound}/>
    </Switch>
  )
}