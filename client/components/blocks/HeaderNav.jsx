import React from 'react';
import {
  FaTelegramPlane, FaFacebookF, FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Section, Menu, Button, ButtonShare,
} from '../simple';


import logo from '../../assets/img/logo.svg';
import addIcon from '../../assets/img/add.svg';
import shareIcon from '../../assets/img/share-arrow.svg';

const socials = [
  {
    icon: <FaTelegramPlane />,
    title: '',
    link: 'tg://msg_url?url=https://logobank.uz/',
    key: 1,
  },
  {
    icon: <FaFacebookF />,
    title: '',
    link: 'https://www.facebook.com/sharer/sharer.php?u=https://logobank.uz/',
    key: 2,
  },
];


const Navbar = ({ subItems }) => (
  <Section>
    <Section.SectionCell lg={12}>
      <Menu theme="transparent">
        <Menu.Logo src={logo} style={{ marginRight: '4em' }} type="image" />
        <Menu.DropdownItem subItems={subItems} textColor="#fff">Категории</Menu.DropdownItem>
        <Menu.Item textColor="#fff" to="/about">О сервисе</Menu.Item>
        <Link to="/addlogo" className="mcs-button mcs-button-light" style={{ fontSize: 14, marginRight: 27, paddingTop: 14 }}>
          <img src={addIcon} style={{ marginRight: 5 }} /> Добавить логотип
        </Link>
        <ButtonShare socials={socials} closeIcon={<FaTimes />}>
          <img src={shareIcon} />
        </ButtonShare>
      </Menu>
    </Section.SectionCell>
  </Section>
);

export default Navbar;
