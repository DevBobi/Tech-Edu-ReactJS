import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Course = (props) => {

    const { title, image, author, user, ratings } = props.course;
    return (
        <div>
            <Col>
                <Card className="">
                    <Card.Img variant="top" src={image} className="meal-img" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{author}</Card.Text>
                        <hr />
                        <Card.Text>{user}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;