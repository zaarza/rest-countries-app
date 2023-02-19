import { configureStore } from '@reduxjs/toolkit';

// Reducers
import countriesReducer from './countries/reducer';
import preLoadingReducer from './preLoading/reducer';
import filtersReducer from './filters/reducer';
import countryDetailReducer from './countryDetail/reducer';

const store = configureStore({
  reducer: {
    preLoading: preLoadingReducer,
    countries: countriesReducer,
    filters: filtersReducer,
    countryDetail: countryDetailReducer,
  },
});

export default store;
