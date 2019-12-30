import React from 'react';
import MaterialInput from '../material-input';
import MaterialButton from '../material-button';

function ModalBody(props) {
    return (
        <div className="modal-body">
            <h6 className="text-align-center">
                {props.text}
            </h6>
            {props.type === "input-modal" ?
                <MaterialInput callback={props.onInputUpdate} name={props.placeholder} icon={props.placeholderIcon} /> : null
            }
            <hr />
            <div className="text-align-right">
                {props.buttons === "ok-cancel" ?
                    <React.Fragment>
                        <MaterialButton text="Ok" action={props.onOkClick} bgColor="green"></MaterialButton>
                        <MaterialButton text="Cancel" action={props.modalClose} bgColor="red"></MaterialButton>
                    </React.Fragment>
                    : <MaterialButton text="Ok" action={props.onOkClick} bgColor="green"></MaterialButton>
                }
            </div>
        </div>
    );
}

export default ModalBody;