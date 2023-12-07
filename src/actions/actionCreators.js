import { actionTypes } from './actionTypes';

export const updateSort = (payload) => ({ type: actionTypes.UPDATE_SORT, payload });

export const updateStopsFilter = (payload) => ({ type: actionTypes.UPDATE_FILTERS, payload });
