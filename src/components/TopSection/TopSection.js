import React from 'react';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="sec-container">
            <div className="top-content pt-5 ps-5">
                <h1 className="title">Welcome To Tech<span className="text-warning">Edu.</span></h1>
                <p className=" text-light">"We provide you best skill development courses".</p>
            </div>
        </div>
    );
};

export default TopSection;