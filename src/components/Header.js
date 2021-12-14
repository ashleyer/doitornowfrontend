
import React from 'react';
import { Link } from 'react-router-dom'
//import '../images/doie_bwandred_block_guy.png'
import '../pages/header.css'

const Header = () => {

  return (

    <header id='header'>

      <div className="title">
        <img id='logored' src={require('../images/block.rw.png')} alt="redwhite" /><h1>Do it... or Else!</h1><h4>i am header</h4>
      </div>

      <nav id='nav'>

        <ul id='homenav'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/tasksecrethome'}>Task Secret Home</Link></li>
        </ul>

        <ul id='tasknav'>
          <li><Link to={'/taskhome'}>Task Home</Link></li>
          <li><Link to={'/tasklist'}>My Tasks</Link></li>
          <li><Link to={'/taskcard'}>Task Card</Link></li>
          <li><Link to={'/taskshow'}>Task Show</Link></li>
          <li><Link to={'/newtask'}>Add New Task</Link></li>
        </ul>

        <ul id='secretnav'>
          <li><Link to={'../pages/secrethome'}>Secret Home</Link></li>
          <li><Link to={'/secretlist'}>My Secrets</Link></li>
          <li><Link to={'/secretcard'}>Secret Card</Link></li>
          <li><Link to={'/secrewtshow'}>Secret Show</Link></li>
          <li><Link to={'/newsecret'}>Add New Secret</Link></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
