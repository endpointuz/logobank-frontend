import React from 'react';

const CardImage = (props) => {
  const { src, className, ...rest } = props;

  const userClasses = className || '';
  return (
    <div className={`mcs-card-image-container ${userClasses}`} {...rest}>
      <img src={src} className="mcs-card-image" />
    </div>
  );
};

CardImage.displayName = 'CardImage';

export default CardImage;
