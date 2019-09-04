import React from 'react';
import PropTypes from 'prop-types';

import SectionCell from './SectionCell';

/**
 * *Children of Section component can be only SectionCell Component.*
 */
class Section extends React.Component {
  render() {
    const {
      children, className, tagName, ...rest
    } = this.props;
    const TagName = tagName || 'div';
    const userClasses = className || '';

    return (
      <TagName className={`mcs-section ${userClasses}`} {...rest}>
        {children}
      </TagName>
    );
  }
}

Section.SectionCell = SectionCell;

Section.propTypes = {
  /** Defines element html tag */
  tagName: PropTypes.string,
};

Section.defaultProps = {
  tagName: 'div',
};

export default Section;
