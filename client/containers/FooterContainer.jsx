import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Footer from '../components/blocks/Footer';

const mapStateToProps = state => ({
  logosCount: state.logosCount.count,
});

const actionsCreators = {
  getLogosCount: actions.getLogosCount,
};

@connect(mapStateToProps, actionsCreators)
class FooterContainer extends React.Component {
  async componentDidMount() {
    const { getLogosCount } = this.props;
    await getLogosCount();
  }

  render() {
    const { logosCount } = this.props;
    return (
      <Footer totalCount={logosCount} />
    );
  }
}

export default FooterContainer;
