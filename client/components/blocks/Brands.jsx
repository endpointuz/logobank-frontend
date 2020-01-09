import React from 'react';
import pose from 'react-pose';
import paymeBrand from '../../assets/img/payme_01.png';

import {
  Section, Card,
} from '../simple';

const CardContainer = pose.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.02 },
});


const brands = [
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-1',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-2',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-3',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-4',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-5',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-6',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-7',
  },
  {
    pic: paymeBrand,
    title: 'Payme',
    key: 'unique-8',
  },
];

const Brands = ({ logos, title }) => (
  <Section>
    <Section.SectionCell lg={12}>
      <h2 className="brands-title">{title}</h2>
    </Section.SectionCell>
    <Section.SectionCell lg={12}>
      <Section>
        {logos.map(brand => (
          <Section.SectionCell sm={6} md={4} lg={2} key={brand.id}>
            <CardContainer style={{ position: 'relative', height: '100%' }}>
              <Card className="shadow" link={brand.link}>
                <Card.CardImage src={brand.preview} style={{ padding: '3.5em 2.5em 0 2.5em' }} />
                <Card.CardTitle>{brand.name}</Card.CardTitle>
              </Card>
            </CardContainer>
          </Section.SectionCell>
        ))}
      </Section>
    </Section.SectionCell>
  </Section>
);

export default Brands;
