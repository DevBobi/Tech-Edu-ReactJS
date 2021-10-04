import React from 'react';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';
import TopSection from '../TopSection/TopSection';

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <Courses></Courses>
            <Services></Services>
        </div>
    );
};

export default Home;