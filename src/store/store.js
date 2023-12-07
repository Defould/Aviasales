import { createStore, combineReducers } from 'redux';

import sortReducer from '../reducers/sortReducer';
import stopsFilterReducer from '../reducers/stopsFilterReducer';
import ticketReducer from '../reducers/ticketReducer';

const store = createStore(combineReducers({ fetchData: ticketReducer, sort: sortReducer, stops: stopsFilterReducer }));

export default store;
