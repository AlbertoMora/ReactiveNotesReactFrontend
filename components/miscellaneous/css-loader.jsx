import React from 'react';

function CssLoader(props) {
    const size = { width: props.size+"px", height: props.size+"px" };
    console.log(props.color);
    return (
        <div className={"lds-ring lds-ring-" + props.color} style={size}>
            <div style={size}>
            </div>
            <div style={size}>
            </div>
            <div style={size}>
            </div>
            <div style={size}>
            </div>
        </div>
    );
}

export default CssLoader;