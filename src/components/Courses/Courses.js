import React from 'react';
import { useEffect } from 'react';
// import { createContext } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

// const MyContext = createContext('context')

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <>
            <div className="container my-5 py-5">
                <h1 className="mb-5">Featured Courses</h1>
                <Row xs={1} md={3} className="g-4 meals-container">
                    {
                        courses.map((course, key) => (
                            <Course course={course} key={key}></Course>
                        ))
                    }
                </Row>
            </div>

        </>
    );
};

export default Courses;