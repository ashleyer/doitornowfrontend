
import React from 'react';
import { Link } from 'react-router-dom'
//import '../images/doie_bwandred_block_guy.png'
import '../pages/header.css'

const Header = () => {

  return (

    <header>

      <div className="logo">
        <div className="image">
          <img class='headerimg' src={require('../images/block.clear.br.png')}alt='blackandwhite'/>
        </div>
      </div>

      <br />


      <nav>

        <div className="tasknav">
          <Link to={'/'}>My Tasks</Link>
          <div className="tasklinks">
            <ul>
              <li><Link to={'/tasks'}>All Tasks</Link></li>
              <li><Link to={'/tasks/new'}>List a New Task</Link></li>
            </ul>
          </div>
        </div>

        <div className="secretnav">
          <Link to={'../pages/secrets'}>All Secrets</Link>
          <div className="secretlinks">
            <ul>
              <li><Link to={'/secrets'}>My Secrets</Link></li>
              <li><Link to={'/secrets/new'}>Tell a New Secret</Link></li>
            </ul>
          </div>
        </div>

      </nav>
      <br />
    </header>
  );
}

export default Header;
