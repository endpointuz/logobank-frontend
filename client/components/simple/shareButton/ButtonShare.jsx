import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pose from 'react-pose';

const SocialContainer = pose.div({
  visible: {
    width: 'auto',
    opacity: 1,
    transition: {
      width: { duration: 200 },
      opacity: {
        duration: 200,
        delay: 100,
      },
    },
  },
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      width: {
        delay: 70,
        duration: 200,
      },
      opacity: {
        duration: 200,
      },
    },
  },
});

const ButtonShare = (props) => {
  const [socialVisible, toggleVisible] = useState(false);

  const {
    className, children, socials, closeIcon, ...rest
  } = props;

  const userClasses = className ? ` ${className}` : '';

  const handleToggleSocials = () => {
    toggleVisible(!socialVisible);
  };

  return (
    <div className={`mcs-socials ${userClasses}`} {...rest}>
      <SocialContainer className="mcs-socials-group" pose={socialVisible ? 'visible' : 'hidden'}>
        {socials.map(btn => (
          <a href={btn.link} target="_blank" rel="noopener noreferrer" type="button" className="mcs-button-light mcs-button-rounded border" key={btn.key}>
            {btn.icon} {btn.title}
          </a>
        ))}
      </SocialContainer>
      <button type="button" className="mcs-button mcs-button-light mcs-button-rounded" onClick={handleToggleSocials}>
        {socialVisible ? closeIcon : children}
      </button>
    </div>
  );
};

ButtonShare.propTypes = {
  /** One of the following types:
    `primary`, `danger`, `warning`, `info`, `secondary`, `success`, `light` */
  socials: PropTypes.array,

};

export default ButtonShare;
