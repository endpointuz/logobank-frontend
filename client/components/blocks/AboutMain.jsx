import React from 'react';
import { Section } from '../simple';

import teamImage from '../../assets/img/team.png';

const { SectionCell } = Section;

const AboutMain = () => (
  <section className="about">
    <Section>
      <SectionCell lg={12}>
        <div className="about-text">
          <h1 className="about-title">О сервисе</h1>
          <p className="about-description">
            Данный сервис создан исключительно в информационных целях профессиональной
            командой разработчиков <a href="https://endpoint.uz" target="_blank" rel="noopener noreferrer">Endpoint</a>.
            Мы верим в те проекты, которые смогут облегчить жизнь и работу людей.
          </p>
          <p className="about-description">
            Именно благодаря этому принципу зародился этот проект. Надеемся на поддержку
            со стороны других дизайнеров в наполнении контента.
          </p>
          <div className="about-image">
            <img src={teamImage} alt="" className="w-100"/>
          </div>
        </div>
      </SectionCell>
    </Section>
  </section>
);

export default AboutMain;
