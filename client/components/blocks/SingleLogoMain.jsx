import React from 'react';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';

import { Section } from '../simple';

const { SectionCell } = Section;

const SingleLogoImage = ({ image }) => (
  <SectionCell lg={4} md={6}>
    <div className="logo-image">
      <img src={image} alt="" className="w-100" />
    </div>
  </SectionCell>
);

const DownloadButton = ({
  name,
  file,
}) => (
  file
    ? <a href={file} target="_blank" rel="noopener noreferrer" className="logo-download-button" download>{name}</a>
    : null
);

const SingleLogoDescription = ({
  title, date, description, files,
}) => {

  return (
    <SectionCell lg={4} md={6}>
      <div className="logo-text">
        <div className="logo-description">
          <h2 className="logo-description-title">{title}</h2>
          <p className="logo-description-date">Загружен {moment(date).format('Do MMMM YYYY')}</p>
          <p className="logo-description-text">{description}</p>
        </div>
        <div className="logo-download">
          <DownloadButton name="PNG" file={files.logo_png } />
          <DownloadButton name="CDR" file={files.logo_cdr} />
          <DownloadButton name="AI" file={files.logo_ai} />
        </div>
      </div>
    </SectionCell>
  );
};

const AllCategories = ({ categories }) => (
  <SectionCell lg={4} className="cell-category" >
    <h5 className="logo-categories-title">Категории:</h5>
    <ul className="logo-categories">
      {categories.map((category) => (
        <li key={category.id} className="logo-categories-item">
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  </SectionCell>
)

const SingleLogoMain = ({
  image,
  title,
  date,
  description,
  categories,
  logoDetailStatus, // TODO: add loader when switch between logo pages
  files = {},
}) => (
    <div className="logo-container">
      <Section className="bg-white">
        <SingleLogoImage image={image} />
        <SingleLogoDescription
          title={title}
          date={date}
          description={description}
          files={files}
        />
        <AllCategories categories={categories}/>
      </Section>
    </div>
);

export default SingleLogoMain;
