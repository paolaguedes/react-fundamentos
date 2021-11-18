import React from 'react';
import { Route} from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'

export default function Routes() {
  return(
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/posts" component={Posts}/>
    </>
  )
}