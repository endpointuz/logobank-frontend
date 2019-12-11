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

const mapStateToProps = state => ({
  categories: state.categories.list,
  logos: state.logos.list,
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
    const { logoDetail, getLogos } = this.props;
    if (prevProps.logoDetail !== logoDetail) {
      await getLogos({ category: logoDetail.category.id });
    }
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    const { logoDetail = { category: '' }, logos = [] } = this.props;
    const logosWithLink = logos.map(logo => ({
      ...logo,
      link: `/logos/${logo.id}`,
    }));
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          {/* <title>{frontTitle.homepage.title}</title> */}
          {/* <meta name="description" content={frontTitle.homepage.description} /> */}
          {/* <meta name="keywords" content={frontTitle.homepage.keywords} /> */}

          {/* <meta property="og:type" content="article" /> */}
          {/* <meta property="og:site_name" content="Endpoint.uz" /> */}
          {/* <meta property="og:title" content={frontTitle.homepage.og.title} /> */}
          {/* <meta property="og:description" content={frontTitle.homepage.og.description} /> */}
          {/* <meta property="og:url" content={frontTitle.homepage.og.url} /> */}
          {/* <meta property="og:image" content={`https://endpoint.uz${frontTitle.homepage.og.image}`} /> */}
          {/* <meta property="og:locale" content="ru_RU" /> */}
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
          />
        </section>
        <section className="morelogos">
          <Brands logos={logosWithLink} title={`Другие логотипы из категории ${logoDetail.category.name}`} />
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
