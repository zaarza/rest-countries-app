import { configureStore } from '@reduxjs/toolkit';

// Reducers
import countriesReducer from './countries/reducer';
import loadingReducer from './loading/reducer';
import searchReducer from './search/reducer';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    loading: loadingReducer,
    search: searchReducer,
  },
});

export default store;
