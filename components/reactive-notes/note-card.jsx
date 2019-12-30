import React, { useState } from 'react';
import CardMenu from './card-menu';
import Col from 'react-bootstrap/Col';

function NoteCard(props) {
    const [menuActive, setMenuActive] = useState(false);
    const onMenuClick = () => {
        setMenuActive(!menuActive);
    }
    return (
        <Col xs={12} sm={12} md={4} lg={3}>
            <div className="note-card">
                <CardMenu isSelectable={props.isSelectable} isAllSelected={props.isAllSelected}
                    isShared={props.isShared}
                    menuActive={menuActive} onMenuClick={onMenuClick} />
                <h3 className="text-center card-title">
                    {props.title}
                </h3>
                <p className="text-justify">
                    {props.text}
                </p>
            </div>
        </Col>
    );
}
export default NoteCard;