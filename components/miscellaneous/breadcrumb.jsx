import React from 'react';

function BreadCrumb(props) {
    return(
        <ul id="breadcrumb">
            {props.children}
        </ul>
    );
}

export default BreadCrumb;