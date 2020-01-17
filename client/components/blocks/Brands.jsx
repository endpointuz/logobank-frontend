import React from 'react';
import url from 'url';
import querystring from 'querystring';
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

const Brands = ({ logos, title, next = null, getLogos }) => {
  const loadMoreLogos = async (e) => {
    e.preventDefault();
    const query = querystring.parse(url.parse(next).query);
    /**
     * getLogos(queryParams, shouldConcatData)
     */
    await getLogos(query, true);
  };

  return (
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
                  <Card.CardImage src={brand.preview} className="p-1" />
                  <Card.CardTitle>{brand.name}</Card.CardTitle>
                </Card>
              </CardContainer>
            </Section.SectionCell>
          ))}
          {
            next
              ? (
                <Section.SectionCell sm={6} md={4} lg={2}>
                  <CardContainer style={{ position: 'relative', height: '100%' }}>
                    <Card className="shadow">
                      <Card.CardTitle middle={true}>
                        Загрузить еще...
                        <a href="#" className="brands-more-link" onClick={loadMoreLogos} />
                      </Card.CardTitle>
                    </Card>
                  </CardContainer>
                </Section.SectionCell>
              )
              : null
          }
        </Section>
      </Section.SectionCell>
    </Section>
  );
}

export default Brands;
