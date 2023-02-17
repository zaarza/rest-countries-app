import { getAllCountries, getCountryDetailsByFullName, getCountryByCountryCode } from '../../api/restCountries';
import { setLoadingActionCreator } from '../loading/action';

const ActionType = {
  RECEIVE_ALL_COUNTRIES: 'RECEIVE_ALL_COUNTRIES',
  RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME: 'RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME',
  RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE: 'RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE',
};

const receiveAllCountriesActionCreator = (countries) => ({
  type: ActionType.RECEIVE_ALL_COUNTRIES,
  payload: countries,
});

const receiveDetailCountryByFullNameActionCreator = (country) => ({
  type: ActionType.RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME,
  payload: country,
});

const receiveDetailCountryByCountryCodeActionCreator = (country) => ({
  type: ActionType.RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE,
  payload: country,
});

const asyncGetAllCountries = () => async (dispatch) => {
  dispatch(setLoadingActionCreator(true));
  try {
    const countries = await getAllCountries();
    dispatch(receiveAllCountriesActionCreator(countries));
  } catch (error) {
    alert(error.message);
  } finally {
    dispatch(setLoadingActionCreator(false));
  }
};

const asyncGetDetailCountryByFullName = (fullNameCountry) => async (dispatch) => {
  try {
    const country = await getCountryDetailsByFullName(fullNameCountry);
    dispatch(receiveDetailCountryByFullNameActionCreator(country));
  } catch (error) {
    alert(error.message);
  }
};

const asyncGetDetailCountryByCountryCode = (countryCode) => async (dispatch) => {
  try {
    const country = await getCountryByCountryCode(countryCode);
    dispatch(receiveDetailCountryByFullNameActionCreator(country));
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType, receiveAllCountriesActionCreator, receiveDetailCountryByFullNameActionCreator,
  receiveDetailCountryByCountryCodeActionCreator, asyncGetAllCountries,
  asyncGetDetailCountryByFullName, asyncGetDetailCountryByCountryCode,
};
