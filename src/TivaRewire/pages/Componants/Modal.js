// src/components/Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Add necessary styles here

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
