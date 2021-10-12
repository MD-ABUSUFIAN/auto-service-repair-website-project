import React from 'react';
import Banner from './Banner/Banner';
import Experts from './Experts/Experts';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            
        </div>
    );
};

export default Home;