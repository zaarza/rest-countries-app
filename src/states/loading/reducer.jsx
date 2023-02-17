/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import { ActionType } from './action';

const reducer = (loadng = true, action = {}) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return action.payload;
    default: return loadng;
  }
};

export default reducer;
