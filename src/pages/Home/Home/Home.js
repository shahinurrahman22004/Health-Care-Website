import React from 'react';
import Banner from '../Banner/Banner';
import News from '../Data/News/News';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <News></News>
        </div>
    );
};

export default Home;