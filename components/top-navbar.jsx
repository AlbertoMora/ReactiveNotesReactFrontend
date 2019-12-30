import React from 'react';
import ReactDom from 'react-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const container = document.getElementById("navbar");
const TopNavBar = 
        <NavBar
            bg="light"
            expand="lg"
            fixed="top"
        >
            <NavBar.Brand href="/home">
                <img
                    src="/resources/images/favicon.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Reactive Notes Logo" />
                     Reactive Notes
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home"><i className="i-home"></i></Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link href="/premium">Premium <i className="i-diamond"></i> Members</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
            </NavBar.Collapse>
        </NavBar>;

ReactDom.render(TopNavBar, container);