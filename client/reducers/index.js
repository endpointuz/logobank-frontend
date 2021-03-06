import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';

import * as actions from '../actions';

const categories = handleActions({
  [actions.getCategoriesRequest](state) {
    return {
      ...state,
      status: 'request',
    };
  },
  [actions.getCategoriesFailure](state) {
    return {
      ...state,
      status: 'failure',
    };
  },
  [actions.getCategoriesSuccess](state, { payload: { data } }) {
    return {
      list: data.results,
      status: 'success',
    };
  },
}, {
  list: [],
  status: null,
});

const logos = handleActions({
  [actions.getLogosRequest](state) {
    return {
      ...state,
      status: 'request',
    };
  },
  [actions.getLogosFailure](state) {
    return {
      ...state,
      status: 'failure',
    };
  },
  [actions.getLogosSuccess](state, { payload: { data, shouldConcat } }) {
    return {
      list: shouldConcat ? [...state.list, ...data.results] : data.results,
      next: data.next,
      status: 'success',
    };
  },
}, {
  list: [],
  status: null,
});

const popularLogos = handleActions({
  [actions.getPopularLogosRequest](state) {
    return {
      ...state,
      status: 'request',
    };
  },
  [actions.getPopularLogosFailure](state) {
    return {
      ...state,
      status: 'failure',
    };
  },
  [actions.getPopularLogosSuccess](state, { payload: { data } }) {
    return {
      list: data.results,
      status: 'success',
    };
  },
}, {
  list: [],
  status: null,
});

const logoDetail = handleActions({
  [actions.getLogoDetailFailure](state) {
    return {
      ...state,
      status: 'failure',
    };
  },
  [actions.getLogoDetailRequest](state) {
    return {
      ...state,
      status: 'request',
    };
  },
  [actions.getLogoDetailSuccess](state, { payload: { data } }) {
    return {
      detail: data,
      status: 'success',
    };
  },
}, {});

const logosCount = handleActions({
  [actions.getLogosCountFailure](state) {
    return {
      ...state,
      status: 'failure',
    };
  },
  [actions.getLogosCountSuccess](state, { payload: { data } }) {
    return {
      count: data.count,
      status: 'success',
    };
  },
  [actions.getLogosCountRequest](state) {
    return {
      ...state,
      status: 'request',
    };
  },
}, {
  count: null,
  status: null,
});

const notification = handleActions({
  [actions.showAlert](state, { payload: { property } }) {
    return {
      show: true,
      ...property,
    };
  },
  [actions.hideAlert]() {
    return {
      show: false,
    };
  },
}, {
  show: false,
});

const foundLogos = handleActions({
  [actions.searchLogosRequest](state) {
    return {
      ...state,
      status: 'request',
    };
  },
  [actions.searchLogosFailure](state) {
    return {
      ...state,
      status: 'failure',
    };
  },
  [actions.searchLogosSuccess](state, { payload: { data } }) {
    return {
      list: data.results,
      status: 'success',
    };
  },
  [actions.clearFoundLogos]() {
    return {
      list: [],
      status: null,
    };
  },
}, {
  list: [],
  status: null,
});

const searchState = handleActions({
  [actions.searchFocus](state) {
    return {
      ...state,
      focus: true,
    };
  },
  [actions.searchBlur](state) {
    return {
      ...state,
      focus: false,
    }
  }
}, {
  focus: false,
});

export default combineReducers({
  categories,
  logos,
  popularLogos,
  logoDetail,
  logosCount,
  notification,
  foundLogos,
  searchState,
  form: formReducer,
});
