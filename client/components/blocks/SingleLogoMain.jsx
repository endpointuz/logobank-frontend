import React from 'react';
import moment from 'moment';
import { Section } from '../simple';

const { SectionCell } = Section;

const SingleLogoImage = ({ image }) => (
  <SectionCell lg={6}>
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
    <SectionCell lg={6}>
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
    </SectionCell>
  );
}

const SingleLogoMain = ({
  image,
  title,
  date,
  description,
  logoDetailStatus, // TODO: add loader when switch between logo pages
  files = {},
}) => (
    <div className="logo-container">
      <Section>
        <SingleLogoImage image={image} />
        <SingleLogoDescription
          title={title}
          date={date}
          description={description}
          files={files}
        />
      </Section>
    </div>
);

export default SingleLogoMain;
