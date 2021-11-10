import React from 'react';
import Header from '../Shared/Header/Header';
import AboutUs from "../Home/AboutUs/AboutUs"
import CustomerSupport from './CustomerSupport/CustomerSupport';
import Reviews from './Reviews/Reviews';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <CustomerSupport></CustomerSupport>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;