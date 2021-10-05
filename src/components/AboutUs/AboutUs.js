import React from 'react';
import { FiUserCheck, FiClock, FiWifi, FiThumbsUp } from "react-icons/fi";
import aboutImg from '../../images/HR91.png';
import './AboutUs.css';

const AboutUs = () => {
    // react icons 
    const thumbIcon = <FiThumbsUp />;
    const cubeIcon = <FiClock />;
    const userIcon = <FiUserCheck />;
    const instructor = <FiWifi />;
    return (
        <div className='m-5 py-5 border about'>
            <h1 className='text-center mb-2'>About Us</h1>
            <p className='text-center mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <h4>Why Choose Us?</h4>
                        <p className='text-Justify'>ullamco laboris nisi ut aliquip ex ea commodo cons equat. Du aute irure dolor in repreh enderit in voluptate velit esse cillumo eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no proident, sunt in culpa qui officia dese aute irure dolor in</p>
                        <button className='btn btn-dark'>Read More</button>
                    </div>
                    <div className="col-md-4">
                        <div className="about-img my-4">
                            <img className='w-75 img-fluid' src={aboutImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 ps-5 ">

                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{thumbIcon}</h1>
                            </div>
                            <div className=" ps-3">
                                <h6>10k Students</h6>
                            </div>
                        </div>
                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{instructor}</h1>
                            </div>
                            <div className=" ps-3">
                                <h6>Instant Live Support</h6>
                            </div>
                        </div>
                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{cubeIcon}</h1>
                            </div>
                            <div className=" ps-3">
                                <h6>Flexible Schedule</h6>
                            </div>
                        </div>
                        <div className="trust d-flex align-items-center">
                            <div className="trust-icon ">
                                <h1>{userIcon}</h1>
                            </div>
                            <div className=" ps-3">
                                <h6>Best Instructors</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;