import { configureStore } from '@reduxjs/toolkit';

// Reducers
import countriesReducer from './countries/reducer';
import loadingReducer from './loading/reducer';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    loading: loadingReducer,
  },
});

export default store;
