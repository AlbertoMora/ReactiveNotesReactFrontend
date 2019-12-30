import React from 'react';
import { NavLink } from 'react-router-dom';

function SbItem(props) {
    let item =
        <div className="nav-item">
            <i className={"item-icon i-" + props.icon + " i-1x-5"}></i>
            <h2 className="item-title">
                {props.text}
            </h2>
        </div>;
    return (
        props.to ? <NavLink to={props.to} activeClassName="sidenav-active">{item}</NavLink> : item
    );
}
export default SbItem;