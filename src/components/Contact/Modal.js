import React from "react";
import "./Modal.css";


const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className="OpenModal" onClick={onClose}>
            <div className="Thanks">{children}</div>
        </div>
    );
};

export default Modal;