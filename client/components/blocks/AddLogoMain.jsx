import React from 'react';
import { Section } from '../simple';

const { SectionCell } = Section;

const AddLogoMain = () => (
  <section className="about">
    <Section>
      <SectionCell lg={12}>
        <div className="about-text">
          <h1 className="about-title">Добавить логотип</h1>
          <p className="about-description">
            Здесь Вы можете добавить в базу исходный логотип компании в форматах .ai .cdr .pdf
          </p>
        </div>
      </SectionCell>
    </Section>
  </section>
);

export default AddLogoMain;
