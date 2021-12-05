import React from 'react';
// import '../images/block.rw.png'
import '../pages/Footer.css'

const Footer = () => {
  return (
    <div>
      <img id='logored' src={require('../images/block.rw.png')} alt="redwhite" />
      <h3 >'Do It or Else' created by A.E. Romano for public use in 2021 </h3>
    </div>
  );
}

export default Footer;
