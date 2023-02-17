/* eslint-disable default-param-last */
import { ActionType } from './action';

const initialState = {
  countriesList: [],
  detail: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_ALL_COUNTRIES:
      return { ...state, countriesList: action.payload };
    case ActionType.RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME
            || ActionType.RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
};

export default reducer;
