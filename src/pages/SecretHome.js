
import React from 'react';
import Header from "../components/Header"
import SecretCard from '../components/SecretCard';
import Footer from '../components/Footer';

const SecretHome= () => {
  return (
    <div>
      <Header />
      {SecretCard}
      <Footer />
    </div>
  );
}

export default SecretHome;
