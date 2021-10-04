import React from 'react';
import Featured from '../../Featured/Featured';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import TopSection from '../TopSection/TopSection';


const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <Featured></Featured>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;