import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to={'/'}>Games!</Link>
      </div>
      <div className="links">
        <ul>
          <li><Link to={'/games'}>All Games</Link></li>
          <li><Link to={'/games/new'}>Add New Game</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
