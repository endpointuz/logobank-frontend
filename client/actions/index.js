import { createAction } from 'redux-actions';
import axios from 'axios';

import routes from '../apiRoutes';

export const toggleRequestVisibility = createAction('REQUEST_VISIBILITY_TOGGLE');

export const showAlert = createAction('ALERT_SHOW');
export const hideAlert = createAction('ALERT_HIDE');

export const setFilterTag = createAction('FILTER_TAG_ACTION');

export const getCategoriesRequest = createAction('GET_CATEGORIES_REQUEST');
export const getCategoriesFailure = createAction('GET_CATEGORIES_FAILURE');
export const getCategoriesSuccess = createAction('GET_CATEGORIES_SUCCESS');

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesRequest());
  try {
    const response = await axios.get(routes.categories());
    dispatch(getCategoriesSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getCategoriesFailure());
  }
};

export const getLogosRequest = createAction('GET_LOGOS_REQUEST');
export const getLogosFailure = createAction('GET_LOGOS_FAILURE');
export const getLogosSuccess = createAction('GET_LOGOS_SUCCESS');

export const getLogos = query => async (dispatch) => {
  dispatch(getLogosRequest());
  try {
    const response = await axios.get(routes.logos(), {
      params: query,
    });
    dispatch(getLogosSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getLogosFailure());
  }
};

export const clearFoundLogos = createAction('FOUND_LOGOS_CLEAR');

export const searchLogosRequest = createAction('SEARCH_LOGOS_REQUEST');
export const searchLogosFailure = createAction('SEARCH_LOGOS_FAILURE');
export const searchLogosSuccess = createAction('SEARCH_LOGOS_SUCCESS');

export const searchLogos = query => async (dispatch) => {
  dispatch(searchLogosRequest());
  try {
    const response = await axios.get(routes.logos(), {
      params: query,
    });
    dispatch(searchLogosSuccess({ data: response.data }));
  } catch (e) {
    dispatch(searchLogosFailure());
  }
};

export const getLogoDetailRequest = createAction('GET_LOGO_DETAIL_REQUEST');
export const getLogoDetailFailure = createAction('GET_LOGO_DETAIL_FAILURE');
export const getLogoDetailSuccess = createAction('GET_LOGO_DETAIL_SUCCESS');

export const getLogoDetail = id => async (dispatch) => {
  dispatch(getLogoDetailRequest());
  try {
    const response = await axios.get(routes.logoRead(id));
    dispatch(getLogoDetailSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getLogoDetailFailure());
  }
};

export const getLogosCountRequest = createAction('GET_LOGOS_COUNT_REQUEST');
export const getLogosCountFailure = createAction('GET_LOGOS_COUNT_FAILURE');
export const getLogosCountSuccess = createAction('GET_LOGOS_COUNT_SUCCESS');

export const getLogosCount = () => async (dispatch) => {
  dispatch(getLogosCountRequest());
  try {
    const response = await axios.get(routes.logosCount());
    dispatch(getLogosCountSuccess({ data: response.data }));
  } catch (e) {
    dispatch(getLogosCountFailure());
  }
};

export const logoCreateRequest = createAction('LOGO_CREATE_REQUEST');
export const logoCreateFailure = createAction('LOGO_CREATE_FAILURE');
export const logoCreateSuccess = createAction('LOGO_CREATE_SUCCESS');

export const logoCreate = data => async (dispatch) => {
  dispatch(logoCreateRequest());
  try {
    const newData = new FormData();
    if (data.preview) {
      newData.append('preview', data.preview[0]);
    }
    newData.append('name', data.name);
    newData.append('category', data.category);
    await axios.post(routes.logoCreate(), newData);

    dispatch(logoCreateSuccess());
    dispatch(showAlert({
      property: {
        title: 'Успешно!',
        description: 'Спасибо что помогаете нам!',
        variant: 'success',
      },
    }));
  } catch (e) {
    console.log(e);
    dispatch(logoCreateFailure());
  }
};