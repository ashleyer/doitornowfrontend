import React from 'react';
import Header from "../components/Header"
import SecretCard from '../components/SecretCard';
import TaskCard from '../components/TaskCard';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            {SecretCard}

            {TaskCard}
            <Footer />
        </div>
    );
}

export default Home;
