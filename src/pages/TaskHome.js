import React from 'react';
import Header from "../components/Header"
import TaskCard from '../components/TaskCard';
import Footer from '../components/Footer';

const TaskHome = () => {
    return (
        <div>
            <Header />
            {TaskCard}
            <Footer />
        </div>
    );
}

export default TaskHome;
