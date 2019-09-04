import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import { isReactComponent } from '../../../utils';

const SearchInput = (props) => {
  const {
    className, buttonText = 'Search', prefix = '', value, ...rest
  } = props;

  const userClasses = className || '';

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const RenderPrefix = prefix;

  return (
    <div className={`mcs-form-search ${userClasses}`}>
      {prefix
        ? <button type="button" className="mcs-form-search-prefix" onClick={handleClick}>
          {isReactComponent(prefix) ? <RenderPrefix /> : prefix}
          </button>
        : null}
      <input
        className={!prefix ? 'mcs-form-search-input' : 'mcs-form-search-input-prefix'}
        ref={inputRef}
        name="search"
        value={value.value}
        autoComplete="off"
        {...rest}
      />
      <button type="submit" className="mcs-form-search-submit">{buttonText}</button>
    </div>
  );
};

SearchInput.defaultProps = {
  type: 'text',
};

export default SearchInput;
