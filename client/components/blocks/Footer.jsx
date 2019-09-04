import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ totalCount }) => (
  <footer className="footer">
    <div className="mcs-section center">
      <div className="mcs-section-cell lg-6">
        <p className="footer-counter" id="footer-counter">
          <span className="logo-counter">На сайте {totalCount} логитипа(-ов)</span>
        </p>
        <p className="footer-info">Все размещенные на сайте логотипы являются собственностью их владельцев.
          Сайт создан исключительно в информационных целях
        </p>
        <ul className="footer-menu">
          <li className="footer-menu-item"><Link to="/about" className="footer-menu-link">О сервисе</Link></li>
          <li className="footer-menu-item"><Link to="/addlogo" className="footer-menu-link">Добавить логотип</Link></li>
          <li className="footer-menu-item"><a href="https://t.me/uladesign" target="_blank" rel="noopener noreferrer" className="footer-menu-link">Обратная связь</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
