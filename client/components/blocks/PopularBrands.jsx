import React from 'react';
import pose from 'react-pose';

import { Section, Card } from '../simple';

import paymeBrand from '../../assets/img/payme_01.png';

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

const PopularBrands = () => (
  <Section>
    <Section.SectionCell lg={12}>
      <h2 className="brands-title">Самые популярные</h2>
    </Section.SectionCell>
    <Section.SectionCell lg={12}>
      <Section>
        {brands.map(brand => (
          <Section.SectionCell sm={6} md={4} lg={3} key={brand.key}>
            <CardContainer style={{ position: 'relative' }}>
              <Card className="shadow">
                <Card.CardImage src={brand.pic} style={{ padding: '3.5em 2.5em 0 2.5em' }} />
                <Card.CardTitle>{brand.title}</Card.CardTitle>
              </Card>
            </CardContainer>
          </Section.SectionCell>
        ))}
      </Section>
    </Section.SectionCell>
  </Section>
);

export default PopularBrands;
