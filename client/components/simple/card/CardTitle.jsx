import React from 'react';

const CardTitle = (props) => {
  const { children, className = '', ...rest } = props;

  return (
    <div className={`mcs-card-title-container ${className}`} {...rest}>
      <h3 className="mcs-card-title">{children}</h3>
    </div>
  );
};

CardTitle.displayName = 'CardTitle';

export default CardTitle;
