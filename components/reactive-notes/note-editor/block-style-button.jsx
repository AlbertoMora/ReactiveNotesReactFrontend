import React from "react";

function BlockStyleButton(props) {
    
    const onToggle = (e) => {
        e.preventDefault();
        if (props.type === "inline") {
            props.onToggleInlineType(props.style);
        } else {
            props.onToggleBlockType(props.style);
        }
    }
    var className = "richtext-stylebutton"
    if (props.active) {
        className += " bg-black";
    } else {
        className += " bg-white";
    }

    return (
        <span className={className} onMouseDown={onToggle}>
            {props.label}
        </span>
    );
}
export default BlockStyleButton;