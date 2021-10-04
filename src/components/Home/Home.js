import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';
import TopSection from '../TopSection/TopSection';


const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <Courses></Courses>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;