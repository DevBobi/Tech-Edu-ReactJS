import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    console.log(props.course);
    const { title, image, description } = props.course;
    return (
        <div>
            <Col>
                <Card className="meal">
                    <Card.Img variant="top" src={image} className="meal-img" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description.slice(0, 250)}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;