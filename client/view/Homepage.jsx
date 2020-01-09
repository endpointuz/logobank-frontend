import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/blocks/HeaderNav';
import Brands from '../components/blocks/Brands';
import FooterContainer from '../containers/FooterContainer';

import sharePic from '../assets/img/opengraph.png';
import { titles } from '../content';

import * as actions from '../actions';
import SearchLogoContainer from '../containers/SearchLogoContainer';

const mapStateToProps = state => ({
  categories: state.categories.list,
  logos: state.logos.list,
  popularLogos: state.popularLogos.list,
});

const actionsCreators = {
  getCategories: actions.getCategories,
  getLogos: actions.getLogos,
  getPopularLogos: actions.getPopularLogos,
};

@withRouter
@connect(mapStateToProps, actionsCreators)
class Homepage extends React.Component {
  state = {
    visible: false,
  }

  async componentDidMount() {
    const { getCategories, getLogos, getPopularLogos } = this.props;
    await getCategories();
    await getLogos({
      page: 1,
      page_size: 12,
    });
    await getPopularLogos({
      page: 1,
      page_size: 12,
    });
    setTimeout(() => {
      this.setState({ visible: true });
      document.querySelector('.loader').classList.add('loaded');
    }, 1500);
    setTimeout(() => {
      document.querySelector('.loader-circle').classList.add('loaded');
    }, 1000);
  }

  componentWillUnmount() {
    document.querySelector('.loader').classList.remove('loaded');
    document.querySelector('.loader-circle').classList.remove('loaded');
  }

  render() {
    const { logos, popularLogos, history, location } = this.props;
    const logosWithLink = logos.map(logo => ({
      ...logo,
      link: `/logos/${logo.id}`,
    }));

    const popularLogosWithLink = popularLogos.map(logo => ({
      ...logo,
      link: `/logos/${logo.id}`,
    }));

    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          <title>{titles.home.title()}</title>
          <meta name="description" content={titles.home.description()} />
          <meta name="keywords" content={titles.home.keywords()} />
          <meta property="og:type" content="article" />
          <meta property="og:site_name" content="Logobank.uz" />
          <meta property="og:title" content="Logobank.uz | Самая обновляемая коллекция логотипов в векторе" />
          <meta property="og:description" content="Здесь Вы можете скачать логотипы известных фирм, предприятий и организаций Узбекистана в полпулярных форматах .cdr .png .eps" />
          <meta property="og:url" content="https://logobank.uz" />
          <meta property="og:image" content={`https://logobank.uz${sharePic}`} />
          <meta property="og:locale" content="ru_RU" />
        </Helmet>
        <header className="header">
          <nav className="header-nav" id="header-nav">
            <Navbar
              subItems={this.props.categories}
            />
          </nav>
          <div className="mcs-section center">
            <div className="mcs-section-cell lg-7">
              <h1 className="header-title">Самая обновляемая коллекция логотипов в векторе</h1>
              <p className="header-subtitle">
                Здесь Вы можете скачать логотипы известных фирм, <br/>
                предприятий и организаций Узбекистана <br/>
                в полпулярных форматах .cdr .png .eps
              </p>
            </div>
          </div>
          <div className="header-search">
            <div className="mcs-section center">
              <div className="mcs-section-cell lg-10">
                <div id="searching-logo" className="searching-logo">
                  <SearchLogoContainer />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="brands" id="brands-first">
          <Brands logos={logosWithLink} title="Новые" />
        </section>
        <section className="brands" id="brands-second">
          <Brands logos={popularLogosWithLink} title="Популярные" />
        </section>
        <FooterContainer />
      </div>
    );
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];

  actionsToBeDispatched.push(store.dispatch(actions.getCategories()));
  actionsToBeDispatched.push(store.dispatch(actions.getLogos({
    page: 1,
    page_size: 8,
  })));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: Homepage,
};
