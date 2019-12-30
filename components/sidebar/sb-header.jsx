import React from 'react';

function SbHeader(props) {
    return (
        <div className="side-header">
            <img src="resources/images/profile.jpg" alt="profile-picture"
                className={"profile-img " + (props.open ? "opened" : "closed")} />
            {
                props.open ?
                    <React.Fragment>
                        <h3 className="username">Name + Surname</h3>
                        <p className="username"><sub>@username</sub></p>
                    </React.Fragment>
                    : ""
            }
        </div>
    );
}
export default SbHeader;