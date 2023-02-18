import { getAllCountries, getCountryDetailsByFullName, getCountryByCountryCode } from '../../api/restCountries';

export const ActionType = {
  RECEIVE_ALL_COUNTRIES: 'RECEIVE_ALL_COUNTRIES',
  RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME: 'RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME',
  RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE: 'RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE',
};

export const receiveAllCountriesActionCreator = (countries) => ({
  type: ActionType.RECEIVE_ALL_COUNTRIES,
  payload: countries,
});

export const receiveDetailCountryByFullNameActionCreator = (country) => ({
  type: ActionType.RECEIVE_DETAIL_COUNTRY_BY_FULL_NAME,
  payload: country,
});

export const receiveDetailCountryByCountryCodeActionCreator = (country) => ({
  type: ActionType.RECEIVE_DETAIL_COUNTRY_BY_COUNTRY_CODE,
  payload: country,
});

export const asyncGetAllCountries = () => async (dispatch) => {
  try {
    const countries = await getAllCountries();
    dispatch(receiveAllCountriesActionCreator(countries));
  } catch (error) {
    alert(error.message);
  }
};

export const asyncGetDetailCountryByFullName = (fullNameCountry) => async (dispatch) => {
  try {
    const country = await getCountryDetailsByFullName(fullNameCountry);
    dispatch(receiveDetailCountryByFullNameActionCreator(country));
  } catch (error) {
    alert(error.message);
  }
};

export const asyncGetDetailCountryByCountryCode = (countryCode) => async (dispatch) => {
  try {
    const country = await getCountryByCountryCode(countryCode);
    dispatch(receiveDetailCountryByFullNameActionCreator(country));
  } catch (error) {
    alert(error.message);
  }
};
