import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-around">
            <div className="col-md-3">
                <div className="footer-cont">
                    <h3>Subscribe</h3>
                    <div className="address">
                        <InputGroup className="mb-3 justify-content-center">
                            <FormControl
                                placeholder="example@email.com"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-info" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="pb-lg-2">
                <h2>Tech<span className="text-info">Edu</span></h2>
                <p className="text-opacity-50 text-light"><small>© TeacEdu - 2025</small></p>

            </div>
        </div>
    );
};

export default Footer;