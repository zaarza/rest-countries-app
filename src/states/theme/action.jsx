export const ActionType = {
  CHANGE_THEME: 'CHANGE_THEME',
};

export const changeThemeActionCreator = (theme) => ({
  type: ActionType.CHANGE_THEME,
  payload: theme,
});
