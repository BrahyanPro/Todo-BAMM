import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

const PopupModal = ({ error, onClose = (f) => f }) => {
  return (
    <div
      className="popup-alert"
      style={{ display: error ? 'inline' : 'none', fontSize: '1rem' }}
    >
      <div>
        <FaExclamationCircle style={{ color: 'red', fontSize: 'x-large' }} />
        <p>La tarea debe contener informacion</p>
      </div>

      <button className="alert-btn" onClick={onClose}>
        OK
      </button>
    </div>
  );
};

export default PopupModal;
