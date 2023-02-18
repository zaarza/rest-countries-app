import { configureStore } from '@reduxjs/toolkit';

// Reducers
import countriesReducer from './countries/reducer';
import preLoadingReducer from './preLoading/reducer';
import filtersReducer from './filters/reducer';

const store = configureStore({
  reducer: {
    preLoading: preLoadingReducer,
    countries: countriesReducer,
    filters: filtersReducer,
  },
});

export default store;
