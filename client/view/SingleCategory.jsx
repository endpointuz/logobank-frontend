import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { last } from 'lodash';
import Navbar from '../components/blocks/HeaderNav';
import SearchLogoContainer from '../containers/SearchLogoContainer';
import Brands from '../components/blocks/Brands';

import * as actions from '../actions';
import FooterContainer from '../containers/FooterContainer';

import { titles } from '../content';


const mapStateToProps = state => ({
  categories: state.categories.list,
  logos: state.logos.list,
});

const actionsCreators = {
  getCategories: actions.getCategories,
  getLogos: actions.getLogos,
  blur: actions.searchBlur,
};

@withRouter
@connect(mapStateToProps, actionsCreators)
class SingleCategory extends React.Component {
  state = {
    visible: false,
  }

  async componentDidMount() {
    const { getCategories, getLogos, location } = this.props;
    const category = last(location.pathname.split('/').filter(el => el));
    await getCategories();
    await getLogos({ category });
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

  async componentDidUpdate(prevProps) {
    const { location, getLogos } = this.props;
    if (prevProps.location !== location) {
      const category = last(location.pathname.split('/').filter(el => el));
      await getLogos({ category });
    }
  }

  render() {
    const { logos, categories, location } = this.props;
    const currentSlug = last(location.pathname.split('/').filter(el => el));
    const logosWithLink = logos.map(logo => ({
      ...logo,
      link: `/logos/${logo.id}`,
    }));

    const [currentCategory] = categories.filter(category => String(category.id) === String(currentSlug));

    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`} onClick={() => this.props.blur()}>
        <Helmet>
          <title>{titles.singleCategory.title(currentCategory.name)}</title>
          <meta name="description" content={titles.singleCategory.description(currentCategory.name)} />
          <meta name="keywords" content={titles.singleCategory.keywords(currentCategory.name)} />

          {/*<meta property="og:type" content="article" />*/}
          {/*<meta property="og:site_name" content="Endpoint.uz" />*/}
          {/*<meta property="og:title" content={frontTitle.homepage.og.title} />*/}
          {/*<meta property="og:description" content={frontTitle.homepage.og.description} />*/}
          {/*<meta property="og:url" content={frontTitle.homepage.og.url} />*/}
          {/*<meta property="og:image" content={`https://endpoint.uz${frontTitle.homepage.og.image}`} />*/}
          {/*<meta property="og:locale" content="ru_RU" />*/}
        </Helmet>
        <header className="header">
          <nav className="header-nav" id="header-nav">
            <Navbar
              subItems={this.props.categories}
            />
          </nav>
          <div className="mcs-section center">
            <div className="mcs-section-cell lg-7">
              <h1 className="header-title">{currentCategory.name}</h1>
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
          <Brands logos={logosWithLink} title="Результаты" />
        </section>
        <FooterContainer />
      </div>
    );
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.getCategories()));
  actionsToBeDispatched.push(store.dispatch(actions.getLogos({ category: match.params.id })));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: SingleCategory,
};
