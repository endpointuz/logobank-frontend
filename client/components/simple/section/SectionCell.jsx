import React from 'react';
import cn from 'classnames';

const SectionCell = (props) => {
  const {
    children, xs, sm, md, lg, xl, className, ...rest
  } = props;

  const sizeClasses = cn({
    [`xs-${xs}`]: xs,
    [`sm-${sm}`]: sm,
    [`md-${md}`]: md,
    [`lg-${lg}`]: lg,
    [`xl-${xl}`]: xl,
  });

  const userClasses = className ? ` ${className}` : '';

  return (
    <div className={`mcs-section-cell ${sizeClasses} ${userClasses}`} {...rest}>
      {children}
    </div>
  );
};

export default SectionCell;
