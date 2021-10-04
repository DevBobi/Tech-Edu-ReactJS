import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FiUserCheck } from "react-icons/fi";

const Course = (props) => {

    const { title, image, author, user, price } = props.course;
    return (
        <div>
            <Col>
                <Card className="">
                    <Card.Img variant="top" src={image} className="meal-img" />
                    <Card.Body>
                        <Card.Text>{author}</Card.Text>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="d-flex justify-content-around text-info">
                            <span><FiUserCheck /> {user}</span>
                            <h4 className="text-warning">{price}$</h4>
                        </Card.Text>
                        <hr />
                        <button className='btn btn-outline-warning'>Read More</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;