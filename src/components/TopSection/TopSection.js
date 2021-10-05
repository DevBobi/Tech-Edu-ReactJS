import React from 'react';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="sec-container">
            <div className="top-content title text-md-center p-5 m-lg-3 m-sm-3">
                <h1 className="">Welcome To Tech<span className="text-warning">Edu.</span></h1>
                <p className=" text-light">"We provide you best skill development courses".</p>
            </div>
        </div>
    );
};

export default TopSection;