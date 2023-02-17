/* eslint-disable default-param-last */
import { ActionType } from './action';

const initialState = {
  searchMode: false,
  searchResult: [],
};

const reducer = (search = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SEARCH_MODE:
      return { ...search, searchMode: action.payload };
    case ActionType.SET_SEARCH_RESULT:
      return { ...search, searchResult: action.payload };
    default: return search;
  }
};

export default reducer;
