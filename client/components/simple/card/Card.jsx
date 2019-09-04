import React from 'react';
import { Link } from 'react-router-dom';

import CardImage from './CardImage';
import CardTitle from './CardTitle';

class Card extends React.Component {
  render() {
    const {
      children = [],
      className,
      link,
      ...rest
    } = this.props;
    const image = React.Children.toArray(children).filter(ch => ch.type.displayName === 'CardImage');
    const title = React.Children.toArray(children).filter(ch => ch.type.displayName === 'CardTitle');

    const userClasses = className || '';

    return (
      <div className={`mcs-card ${userClasses}`} {...rest}>
        {image}
        {title}
        { link ? <Link to={link} className="mcs-card-link" /> : null }
      </div>
    );
  }
}

Card.CardImage = CardImage;
Card.CardTitle = CardTitle;

export default Card;
