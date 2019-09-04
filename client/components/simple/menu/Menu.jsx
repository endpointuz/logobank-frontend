import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Item from './Item';
import DropdownItem from './DropdownItem';

/**
 * Menu component includes `Item`, `Logo`, `DropdownItem` components as well.
 * See example's source code.
 */
class Menu extends React.Component {
  state = {
    isMenuVisible: false,
  }

  handleToggleMenuVisibility = () => {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    });
  }

  render() {
    const { children = [], className, ...rest } = this.props;

    const menuItems = children
      ? React.Children.toArray(children).filter(el => el.type.displayName === 'Item' || el.type.displayName === 'DropdownItem')
      : null;

    const logo = children
      ? React.Children.toArray(children).filter(el => el.type.displayName === 'Logo')
      : null;

    const side = children
      ? React.Children.toArray(children).filter(({ type: { displayName } }) => displayName !== 'Item' && displayName !== 'Logo' && displayName !== 'DropdownItem')
      : null;

    const { theme } = this.props;

    return (
      <div className={`mcs-menu ${theme || ''} ${className || ''}`} {...rest}>
        {logo}
        <div className={`mcs-menu-container${this.state.isMenuVisible ? ' visible' : ''}`}>
          <div className="mcs-menu-items">
            <ul className="mcs-menu-list">
              {menuItems}
            </ul>
          </div>
          <div className="mcs-menu-side">
            {side}
          </div>
        </div>
        <button type="button" className="mcs-menu-toggler hide" onClick={this.handleToggleMenuVisibility}>- - -</button>
      </div>
    );
  }
}

Menu.Item = Item;

Menu.Logo = Logo;

Menu.DropdownItem = DropdownItem;

Menu.propTypes = {
  /** For now supports only two theme: `dark` and `transparent` */
  theme: PropTypes.string,
};

export default Menu;
