import React from 'react'
import { routes, Route } from 'react-router-dom'

import SecretsList from '../pages/SecretsList'
import SecretHome from '../pages/SecretHome'
import SecretShow from '../pages/SecretShow'
import NewSecret from '../pages/NewSecret'

import TasksList from '../pages/TasksList'
import TaskHome from '../pages/TaskHome'
import TaskShow from '../pages/TaskShow'
import NewTask from '../pages/NewTask'

//import Home from '../pages/homepage'

//import Header from '../components/Header'
//import Footer from '../components/Footer'

export default (
  
  <routes>

    <Route path='/secrets/new' component={ NewSecret}/>
    <Route path='/secrets/:id' component={ SecretShow } />
    <Route path='/secretslist' component={ SecretsList } />
    <Route path='/secrethome' component={SecretHome} />

    <Route path='/tasks/new' component={ NewTask} />
    <Route path='/tasks/:id' component={ TaskShow } />
    <Route path='/taskslist' component={ TasksList } />
    <Route path='/taskhome' component={TaskHome} />
  
  

  
  </routes>
)

   //<Route path='/' component={ Home }/>