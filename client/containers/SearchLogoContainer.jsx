import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '../actions';
import SearchLogo from '../components/blocks/SearchLogo';

const mapStateToProps = (state) => ({
  foundLogos: state.foundLogos,
});

const actionsCreators = {
  searchLogo: actions.searchLogos,
  clearFoundLogos: actions.clearFoundLogos,
};
@withRouter
@connect(mapStateToProps, actionsCreators)
class SearchLogoContainer extends React.Component {
  componentDidMount() {
    const { clearFoundLogos } = this.props;
    clearFoundLogos();
  }

  handleChange = async (data) => {
    const { searchLogo, clearFoundLogos } = this.props;
    if (!data.value) {
      clearFoundLogos();
      return;
    }
    await searchLogo({
      search: data.value,
    });
  }

  handleSubmit = (data) => {
    const { history, clearFoundLogos } = this.props;
    clearFoundLogos();
    if (data.search.value) {
      history.push(`/search?search=${data.search.value}`);
    }
  }

  render() {
    return (
      <div className="search-container">
        <SearchLogo
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ul className="search-container-list">
          {this.props.foundLogos.list.map((logo) => (
            <li key={logo.id} className="search-item">
              <Link to={`/logos/${logo.id}`}>{logo.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};


export default SearchLogoContainer;
