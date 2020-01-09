import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { take } from 'lodash';

/**
 * Dropdown should be used inside Menu component only.
 * @param {object} props
 */
class DropdownItem extends React.Component {
  state = {
    mouseOverLink: false,
    mouseOverMenu: false,
  }

  handleEnterLink = () => {
    this.setState({ mouseOverLink: true });
  }

  handleLeaveLink = () => {
    setTimeout(() => {
      this.setState({ mouseOverLink: false });
    }, 300);
  }

  handleEnterMenu = () => {
    this.setState({ mouseOverMenu: true });
  }

  handleLeaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false });
    }, 300);
  }

  handleOnClickMenu = (e) => {
    e.preventDefault();
    this.setState({ mouseOverLink: !this.state.mouseOverLink });
  }

  renderDropdownContainer = () => {
    const { subItems = [], className = '' } = this.props;

    return (
      <ul className={`mcs-menu-dropdown ${className}`} >
        {subItems.map((categoryItem) => (
          <li className="mcs-menu-dropdown-item" key={categoryItem.id}>
            <Link to={`/category/${categoryItem.id}`} className="mcs-menu-link" onClick={() => this.handleLeaveLink()}>
              {categoryItem.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { mouseOverLink, mouseOverMenu } = this.state;

    const {
      children, textColor, subItems, ...rest
    } = this.props;
    /*
      subItem prop should be type of Array and contain objects.
      Object must have the following keys:
      {
        title: 'title',
        key: 'key',
      }
    */

    const styles = {
      color: textColor,
    };

    return (
      <li className="mcs-menu-item dropdown-item" {...rest}>
        <a href="#" className="mcs-menu-link dropdown-link" style={styles} onClick={this.handleOnClickMenu}>
          {children} <IoIosArrowDown size=".7em" style={ { verticalAlign: 'middle' } } />
        </a>
        {mouseOverLink
          ? this.renderDropdownContainer()
          : null}
      </li>
    );
  }
}

DropdownItem.displayName = 'DropdownItem';

export default DropdownItem;
