import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { last } from 'lodash';
import Navbar from '../components/blocks/HeaderNav';

import * as actions from '../actions';
import SingleLogoMain from '../components/blocks/SingleLogoMain';
import Brands from '../components/blocks/Brands';
import FooterContainer from '../containers/FooterContainer';

import { titles, opengraph } from '../content';

const mapStateToProps = state => ({
  categories: state.categories.list,
  logos: state.logos.list,
  nextLogos: state.logos.next,
  logoDetail: state.logoDetail.detail,
  logoDetailStatus: state.logoDetail.status,
});

const actionsCreators = {
  getCategories: actions.getCategories,
  getLogoDetail: actions.getLogoDetail,
  getLogos: actions.getLogos,
};

@withRouter
@connect(mapStateToProps, actionsCreators)
class SingleLogo extends React.Component {
  state = {
    visible: false,
  }

  async componentDidMount() {
    const {
      getCategories, getLogoDetail, location,
    } = this.props;
    await getCategories();
    const currentSlug = last(location.pathname.split('/').filter(el => el));
    await getLogoDetail(currentSlug);

    setTimeout(() => {
      this.setState({ visible: true });
      document.querySelector('.loader').classList.add('loaded');
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader-circle').classList.add('loaded');
    }, 1000);
  }

  async componentDidUpdate(prevProps) {
    const {
      logoDetail, getLogos, location, getLogoDetail,
    } = this.props;
    if (prevProps.logoDetail !== logoDetail) {
      await getLogos({ category: logoDetail.category.id });
    }
    const prevSlug = last(prevProps.location.pathname.split('/').filter(el => el));
    const currentSlug = last(location.pathname.split('/').filter(el => el));
    if (prevSlug !== currentSlug) {
      await getLogoDetail(currentSlug);
    }
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    const {
      logoDetail = { category: '' }, logos = [], logoDetailStatus, location, nextLogos, getLogos,
    } = this.props;
    const logosWithLink = logos.map(logo => ({
      ...logo,
      link: `/logos/${logo.id}`,
    }));
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
           <title>{titles.singleLogo.title(logoDetail.name)}</title>
           <meta name="description" content={titles.singleLogo.description(logoDetail.name)} />
           <meta name="keywords" content={titles.singleLogo.keywords(logoDetail.name)} />

           <meta property="og:type" content="article" />
           <meta property="og:site_name" content="Logobank.uz" />
           <meta property="og:title" content={opengraph.singleLogo.title(logoDetail.name)} />
           <meta property="og:description" content={opengraph.singleLogo.description(logoDetail.name)} />
           <meta property="og:url" content={`https://logobank.uz${location.pathname}`} />
           <meta property="og:image" content={logoDetail.preview} />
           <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <header className="header">
          <nav className="header-nav" id="header-nav">
            <Navbar
              subItems={this.props.categories}
            />
          </nav>
        </header>
        <section className="logo">
          <SingleLogoMain
            image={logoDetail.preview}
            title={logoDetail.name}
            date={logoDetail.created_at}
            description={logoDetail.description}
            files={logoDetail.files}
            logoDetailStatus={logoDetailStatus}
            categories={this.props.categories}
          />
        </section>
        <section className="morelogos">
          <Brands logos={logosWithLink} title={`Другие логотипы из категории ${logoDetail.category.name}`} next={nextLogos} getLogos={getLogos} />
        </section>
        <FooterContainer />
      </div>
    );
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.getCategories()));
  actionsToBeDispatched.push(store.dispatch(actions.getLogoDetail(match.params.id)));
  actionsToBeDispatched.push(store.dispatch(actions.getLogos({ category: match.params.id })));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: SingleLogo,
};
