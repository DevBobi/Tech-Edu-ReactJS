import React from 'react';
import './Services.css';
import { Row, Card, Col } from 'react-bootstrap';
import { ImOffice, ImBubble, ImBook } from "react-icons/im";

const Services = () => {
    return (
        <div className="sevices container my-5 py-5">
            <div className="services mb-5">
                <h1>We can help you with</h1>
            </div>
            <div className="mb-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-1"><ImBook /></Card.Title>
                                <Card.Title>Coaching</Card.Title>
                                <Card.Text>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-1"><ImBubble /></Card.Title>
                                <Card.Title>Consultation</Card.Title>
                                <Card.Text>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className="fs-1"><ImOffice /></Card.Title>
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