const ActionType = {
  SET_SEARCH_MODE: 'SET_SEARCH_MODE',
  SET_SEARCH_RESULT: 'SET_SEARCH_RESULT',
};

const setSearchModeActionCreator = (searchModeStatus) => ({
  type: ActionType.SET_SEARCH_MODE,
  payload: searchModeStatus,
});

const receiveSearchResult = (countries) => ({
  type: ActionType.SET_SEARCH_RESULT,
  payload: countries,
});

export { ActionType, setSearchModeActionCreator, receiveSearchResult };
