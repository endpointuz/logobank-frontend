import React from 'react';

const Input = (props) => {
  const {
    className, value, defaultValue, ...rest
  } = props;

  const userClasses = className || '';

  return (
    <input className={`mcs-form-input ${userClasses}`} {...value} {...rest} />
  );
};

export default Input;
