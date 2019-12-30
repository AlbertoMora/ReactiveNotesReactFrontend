import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

function CardMenu(props) {
    const [checked, setChecked] = useState(false);

    const onCheckClick = () => {
        setChecked(!checked);
    }
    useEffect(() => {
        setChecked(false);
    }, [props.isSelectable]);

    useEffect(() => {
        setChecked(props.isAllSelected ? true : false);
    }, [props.isAllSelected]);

    var element = setElement(props.isSelectable, props.isShared, props.onMenuClick,
        props.menuActive, onCheckClick, checked);

    return (
        <Row className="fixed-percent">
            {
                element
            }
        </Row>
    );
}

function setElement(elementStatus, isShared, onMenuClick, menuActive, onCheckClick, checked) {
    return elementStatus ?
        <div className={"checkbox-container" + (elementStatus ? " float-right" : "")}>
            <input type="checkbox" name="card-checkbox" onChange={onCheckClick} className="md-checkbox"
                checked={checked} />
            <label htmlFor="card-checkbox" className="checkmark" onClick={onCheckClick}></label>
        </div>
        :
        <React.Fragment>
            <Col xs={9} xl={10}>
                {
                    isShared ?
                        <i className="i-user-shared" title="shared note"></i> : ""
                }
            </Col>
            <Col xs={2}>
                <button onClick={onMenuClick} className="transparent-button" type="text" >
                    <i className={"i-menu-" + (menuActive ? "vertical" : "horizontal")}></i>
                </button>
            </Col>
        </React.Fragment>;
}
export default CardMenu;