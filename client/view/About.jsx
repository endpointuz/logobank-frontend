import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Navbar from '../components/blocks/HeaderNav';

import * as actions from '../actions';

import FooterContainer from '../containers/FooterContainer';
import AboutMain from '../components/blocks/AboutMain';

const mapStateToProps = (state) => ({
  categories: state.categories.list,
});

const actionsCreators = {
  getCategories: actions.getCategories,
};

@withRouter
@connect(mapStateToProps, actionsCreators)
class About extends React.Component {
  state = {
    visible: false,
  }

  async componentDidMount() {
    const { getCategories } = this.props;
    await getCategories();

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
        <AboutMain />

        <FooterContainer />
      </div>
    );
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.getCategories()));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: About,
};
