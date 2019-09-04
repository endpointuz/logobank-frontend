import React from 'react';
import {
  FaCheck, FaTimesCircle,
} from 'react-icons/fa';

const icons = {
  success: <FaCheck style={{ color: 'green' }} />,
  failure: <FaTimesCircle style={{ color: 'red' }} />
};

const Alert = ({
  title, description, variant, show, handleClose,
}) => (
  show
    ? <div className="alert-wrapper" onClick={handleClose}>
        <div className="alert-box">
          <h2 className="alert-title">{icons[variant]} {title}</h2>
          <p className="alert-description">{description}</p>
        </div>
      </div>
    : null
);

export default Alert;
