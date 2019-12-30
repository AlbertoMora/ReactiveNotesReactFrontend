import React from "react";

function HeaderStyleDropdown(props) {

  const onToggle = event => {
    let value = event.target.value
    props.onToggleBlockType(value)
  }

  return (
    <select className="md-select" value={props.active} onChange={onToggle}>
      <option value="">Normal</option>
      {props.headerOptions.map(heading => {
        return (
          <option key={heading.label} value={heading.style}>
            {heading.label}
          </option>
        )
      })}
    </select>
  )
};
export default HeaderStyleDropdown