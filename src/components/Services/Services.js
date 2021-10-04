import React from 'react';
import './Services.css';
import { Row, Card, Col } from 'react-bootstrap';
import { FaBeer, } from 'react-icons/fa';
import { FiBook } from "react-icons/fi";

const Services = () => {
    return (
        <div className="sevices container my-5 py-5">
            <div className="services mb-5">
                <h1>We can help you with</h1>
            </div>

            <div>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-1"><FaBeer /></Card.Title>
                                <Card.Title>Coaching</Card.Title>
                                <Card.Text>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-1"><FiBook /></Card.Title>
                                <Card.Title>Consultation</Card.Title>
                                <Card.Text>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-1"><FaBeer /></Card.Title>
                                <Card.Title>Life Programs</Card.Title>
                                <Card.Text>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default Services;