import React, { useState } from 'react';


function MaterialButton(props) {
    return (
        <button className={"material-button bg-" + props.bgColor } onClick={props.action}>
            <i className={"i-" + props.icon}></i> {props.text}
        </button>
    );
}

export default MaterialButton;