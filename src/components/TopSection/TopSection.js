import React from 'react';
import './TopSection.css';

const TopSection = () => {
    return (
        <div className="sec-container">
            <div className="top-content">
                <h1 className="title p-3">Tech<span className="text-warning">Edu</span></h1>
                <p className=" text-light bg-dark p-2">"We help people acheiving skills backed by science strategies for success".</p>
            </div>
        </div>
    );
};

export default TopSection;