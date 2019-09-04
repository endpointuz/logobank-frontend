import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Navbar from '../components/blocks/HeaderNav';
import FooterContainer from '../containers/FooterContainer';

import * as actions from '../actions';
import { Section } from '../components/simple';

const { SectionCell } = Section;

const mapStateToProps = state => ({
  categories: state.categories.list,
  logos: state.logos.list,
});

const actionsCreators = {
  getCategories: actions.getCategories,
  getLogos: actions.getLogos,
};

@withRouter
@connect(mapStateToProps, actionsCreators)
class AllCategories extends React.Component {
  state = {
    visible: false,
  }

  async componentDidMount() {
    const { getCategories, getLogos } = this.props;
    await getCategories();
    await getLogos({
      page: 1,
      page_size: 8,
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
    const { categories } = this.props;
    return (
      <div className={`wrapper ${this.state.visible ? '' : 'load'}`}>
        <Helmet>
          {/*<title>{frontTitle.homepage.title}</title>*/}
          {/*<meta name="description" content={frontTitle.homepage.description} />*/}
          {/*<meta name="keywords" content={frontTitle.homepage.keywords} />*/}

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
              subItems={categories}
            />
          </nav>
          <div className="mcs-section center">
            <div className="mcs-section-cell lg-7">
              <h1 className="header-title">Все категории</h1>
              <p className="header-subtitle">
                Здесь Вы можете скачать логотипы известных фирм, <br/>
                предприятий и организаций Узбекистана <br/>
                в полпулярных форматах .cdr .png .eps
              </p>
            </div>
          </div>
        </header>

        <section className="about">
          <Section>
            <SectionCell lg={12}>
              <div className="about-text">
                <Section>
                  {categories.map((category) => (
                    <SectionCell lg={3} key={category.id} style={{
                      textAlign: 'center',
                      padding: '15px 0',
                    }}>
                      <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </SectionCell>
                  ))}
                </Section>
              </div>
            </SectionCell>
          </Section>
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
  component: AllCategories,
};
