import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar variant="dark" className="mealdb-nav bg-dark" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className="nav-brand">
                    <NavLink
                        to="/home"
                        style={{ textDecoration: "none", color: "#ff9e32" }}
                    >
                        <h2>TechHome</h2>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-menu">
                            <NavLink
                                to="/home"
                                style={{ textDecoration: "none", color: "#ff9e32" }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Home
                            </NavLink>
                        </Nav.Link>

                        <Nav.Link className="nav-menu">
                            <NavLink
                                to="/courses"
                                style={{ textDecoration: "none", color: "#ff9e32" }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Course
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-menu">
                            <NavLink
                                to="/services"
                                style={{ textDecoration: "none", color: "#ff9e32" }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                Services
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="nav-menu">
                            <NavLink
                                to="/about"
                                style={{ textDecoration: "none", color: "#ff9e32" }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white",
                                }}
                            >
                                About Us
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;