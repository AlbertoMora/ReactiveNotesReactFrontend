import React from 'react';

function ModalHeader(props) {
    return (
        <div className="modal-header">
            <i className={"i-" + props.icon + " i-1x-5 text-align-center d-block"}></i>
            <h3 className="text-align-center">{props.title}</h3>
        </div>
    );
}

export default ModalHeader;