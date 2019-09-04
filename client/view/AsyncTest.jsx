import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const mapStateToProps = state => ({
  isRequesting: state.logInData.isRequesting,
  name: state.logInData.username,
});

const actionCreators = {
  logIn: actions.logIn,
  logOut: actions.logOut,
};

const username = 'igorkim';
const password = '123456';

class Homepage extends React.Component {
  componentDidMount() {
    const { logIn: doFetch } = this.props;
    doFetch({ username, password });
  }

  render() {
    const { name, isRequesting } = this.props;
    return (
      <div className="wrapper">
        <h1>Welcome, this is the homepage {name}!</h1>
        <button onClick={() => console.log('I, clicked!')} >
            Click me!
        </button>
      </div>
    );
  }
}

const loadData = (store, match, cookie) => {
  const actionsToBeDispatched = [];
  actionsToBeDispatched.push(store.dispatch(actions.logIn));

  return Promise.all(actionsToBeDispatched);
};

export default {
  loadData,
  component: connect(mapStateToProps, actionCreators)(Homepage),
};
