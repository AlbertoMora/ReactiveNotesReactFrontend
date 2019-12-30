import React from 'react';
import { Col, Row } from 'react-bootstrap';

export const Footer = () => {
    let notDecList = { listStyleType: "none", padding: 0 };
    return (
        <footer className="footer w-sidebar">
            <Row>
                <Col xs={12} md={4} className="text-align-center text-md-align-left">
                    <ul style={notDecList}>
                        <li><a className="footer-link" href="/blog">Blog</a></li>
                        <li><a className="footer-link" href="/premium">
                            Become a Premium <i className="i-diamond i-0x-7"></i> Member</a>
                        </li>
                        <li><a className="footer-link" href="/social">Social Responsability</a></li>
                        <li><a className="footer-link" href="/terms">Terms and Conditions</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} className="text-align-center text-md-align-center">
                    <ul style={notDecList}>
                        <li><a className="footer-link" href="https://www.facebook.com/reactive-notes"><i className="i-fb"></i> Follow us on Facebook</a></li>
                        <li><a className="footer-link" href="https://www.twitter.com/reactive-notes"><i className="i-twitter"></i> Follow us on Twitter</a></li>
                        <li> <a className="footer-link" href="https://www.instagram.com/reactive-notes"><i className="i-instagram"></i> Follow us on Instagram</a></li>
                        <li><a className="footer-link" href="https://www.linkedin.com/reactive-notes"><i className="i-linkedin"></i> Follow us on LinkedIn</a></li>
                        <li><a className="footer-link" href="https://www.github.com/AureSoft/reactive-notes"><i className="i-github"></i> Collaborate with the project</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={4} className="text-align-center text-md-align-right">
                    <ul style={notDecList}>
                        <li><a href="/jobs" className="footer-link">Jobs</a></li>
                        <li><a href="/about" className="footer-link">About Us</a></li>
                        <li><a href="/team" className="footer-link">Our Team</a></li>
                        <li><a href="/contact" className="footer-link">Contact Us</a></li>
                    </ul>
                </Col>
            </Row>
            <hr className="sidebar-hr" />
            <Row className="text-align-center">
                <Col className="text-align-center text-white">
                    <p className="d-inline-block">
                        Built with <i className="i-heart i-red d-inline-block"></i>
                        <a href="https://www.visitcostarica.com/en" target="_blank" rel="noopener noreferrer"> in Costa Rica.</a>
                    </p>
                </Col>
            </Row>
        </footer>
    );
};