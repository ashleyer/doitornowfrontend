import React from 'react';
import TaskContainer from './containers/taskContainer'
import SecretContainer from './containers/secretContainer'
import TaskSecretHome from './containers/taskSecretHome'

import Home from './components/home';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/index.css';
import './styles/header.css';
import './styles/Footer.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/tasksecrethome' component={TaskSecretHome} />
        <Route path='/taskhome' component={TaskContainer} />
        <Route path='/secrethome' component={SecretContainer} />
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
