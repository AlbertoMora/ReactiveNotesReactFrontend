import React from 'react';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

function StatCard(props) {

    return (
        <Col xs="12" md="4" lg="3">
            <Link to={props.to}>
                <div className={"stat-card text-align-center bg-" + props.bgColor}>
                    <i className={"i-" + props.type + " i-2x i-"+props.iconColor}></i>
                    <h3>{props.title}</h3>
                    <hr className="sidebar-hr"/>
                    <p>{props.desc}</p>
                </div>
            </Link>
        </Col>
    );
}

export default StatCard;