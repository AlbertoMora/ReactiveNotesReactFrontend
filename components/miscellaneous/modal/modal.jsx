import React from 'react';
import ModalHeader from './modal-header';
import ModalBody from './modal-body';



const Modal = React.memo((props) => {
    const [value, setValue] = React.useState(false);
    const onOkClick = () => {
        props.callback(value);
        props.modalClose();
        setValue(false);
    }
    const onInputUpdate = (value) => {
        setValue(value);
    }

    return (
        props.active ? <div className={"modal-container"}>
            <div className="modal-shadow"></div>
            <div className="modal-content">
                <ModalHeader
                    icon={props.icon}
                    title={props.title} />
                <ModalBody
                    text={props.text}
                    onInputUpdate={onInputUpdate}
                    onOkClick={onOkClick}
                    modalClose={props.modalClose}
                    type={props.type}
                    buttons={props.buttons}
                    placeholder={props.placeholder}
                    placeholderIcon={props.placeholderIcon}
                />
            </div>
        </div> : null
    );
});

export default Modal;