import { getAllCountries } from '../../api/restCountries';
import { receiveAllCountriesActionCreator } from '../countries/action';

export const ActionType = {
  SET_PRELOADING: 'SET_PRELOADING',
};

export const setPreLoadingActionCreator = (preLoadingStatus) => ({
  type: ActionType.SET_PRELOADING,
  payload: preLoadingStatus,
});

export const asyncPreLoad = () => async (dispatch) => {
  try {
    const countries = await getAllCountries();
    dispatch(receiveAllCountriesActionCreator(countries));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(setPreLoadingActionCreator(false));
  }
};
