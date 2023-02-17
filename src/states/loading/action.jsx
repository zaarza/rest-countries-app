const ActionType = {
  SET_LOADING: 'SET_LOADING',
};

const setLoadingActionCreator = (loadingStatus) => ({
  type: ActionType.SET_LOADING,
  payload: loadingStatus,
});

export { ActionType, setLoadingActionCreator };
