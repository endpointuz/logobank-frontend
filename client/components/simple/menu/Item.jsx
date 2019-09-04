import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const {
    children, textColor = 'white', className = '', to = '#', ...rest
  } = props;
  const styles = {
    color: textColor,
  };
  return (
    <li className={`mcs-menu-item ${className}`} {...rest}>
      <Link to={to} className="mcs-menu-link" style={styles}>
        {children}
      </Link>
    </li>
  );
};

Item.displayName = 'Item';

export default Item;
