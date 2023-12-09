import { configureStore } from '@reduxjs/toolkit';

import sortReducer from '../reducers/sortReducer';
import stopsFilterReducer from '../reducers/stopsFilterReducer';
import fetchDataReducer from '../reducers/fetchDataReducer';

const store = configureStore({
  reducer: { fetchData: fetchDataReducer, sort: sortReducer, stops: stopsFilterReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
