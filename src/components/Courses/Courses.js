import React from 'react';
// import { createContext } from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Course from '../Course/Course';

// const MyContext = createContext('context')

const Courses = () => {
    const [courses] = useCourses();
    return (
        <>
            <div className="container my-5 py-3">
                <div className="pb-3">
                    <h1 className="mb-5">Featured Courses</h1>
                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.map((course, key) => (
                                <Course course={course} key={key}></Course>
                            ))
                        }
                    </Row>

                </div>
                <div>
                    <button className="btn btn-danger">See All Courses</button>
                </div>
            </div>

        </>
    );
};

export default Courses;