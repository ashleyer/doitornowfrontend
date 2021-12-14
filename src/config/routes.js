import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SecretHome from '../pages/SecretHome'
import SecretList from '../pages/SecretList'
import SecretShow from '../pages/SecretShow'
import NewSecret from '../pages/NewSecret'

import TaskHome from '../pages/TaskHome'
import TaskList from '../pages/TaskList'
import TaskShow from '../pages/TaskShow'
import NewTask from '../pages/NewTask'

import TaskSecretHome from '../containers/taskSecretHome'
import Home from './components/home'



export default (

  <Switch>

    <Route path='/secrets/newsecret' component={NewSecret} />
    <Route path='/secrets/:id' component={SecretShow} />
    <Route path='/secretlist' component={SecretList} />
    <Route path='/secrethome' component={SecretHome} />

    <Route path='/tasks/newtask' component={NewTask} />
    <Route path='/tasks/:id' component={TaskShow} />
    <Route path='/tasklist' component={TaskList} />
    <Route path='/taskhome' component={TaskHome} />
    <Route path='/tasksecrethome' component={TaskSecretHome} />
    <Route exact path='/' component={Home} />


  </Switch>

)


