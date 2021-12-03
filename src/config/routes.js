import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GameList from '../pages/GamesList'
import Home from '../pages/Home'
import GameShow from '../pages/GameShow'
import NewGame from '../pages/NewGame'
import Header from '../components/Header'

export default (
  <Switch>
    <Route path='/games/new' component={ NewGame }/>
    <Route path='/games/:id' component={ GameShow } />
    <Route path='/games' component={ GameList } />
    <Route exact path='/' component={ Home } />
  </Switch>
)