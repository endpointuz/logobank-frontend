import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  const {
    children, textColor = '#fff', className = '', src, type, ...rest
  } = props;
  const child = type === 'image' ? <img src={src} /> : children;
  return (
    <div className={`mcs-menu-logo ${className}`} {...rest}>
      <Link to="/" className="mcs-menu-link" style={{ color: textColor }}>
        {child}
      </Link>
    </div>
  );
};

Logo.displayName = 'Logo';

export default Logo;
