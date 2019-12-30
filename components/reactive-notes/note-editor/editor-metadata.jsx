import React from 'react';
import MaterialButton from '../../miscellaneous/material-button';
import MaterialInput from '../../miscellaneous/material-input';
import {Row, Col} from 'react-bootstrap';

function NoteMetadata(props) {
    let offsetColOne = {span:5, offset:1};
    return (
        <Row>
            <Col xs={12} md={offsetColOne} className="text-align-center">
                <MaterialInput callback={props.onTitleChange} icon="pencil" name="Title" id="note-title" customClass="note-title" />
            </Col>
            <Col xs={12} md={5} className="text-align-center text-md-align-right">
                <MaterialButton action={props.onDataSave} icon="save" text="Save Note" bgColor="deep-grey" />
            </Col>
        </Row>
    );
}

export default NoteMetadata;