import React from 'react';
import { Link } from 'react-router-dom';

function BrCrItem(props) {
    return (
        <li>
            <Link to={props.to}>
                <i className={"i-" + props.icon}></i>{" " + props.text}
            </Link>
        </li>
    );
}

export default BrCrItem;