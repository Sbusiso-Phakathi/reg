import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button  onClick={onClose}>
          <div className='carbon-close-filled12'>
        <div className='vector12' />
      </div>
          </button>
          {children}
        </div>
      </div>
    );
  };


  export default Modal;
