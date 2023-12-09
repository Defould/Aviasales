import { createAction } from '@reduxjs/toolkit';

import { actionTypes } from './actionTypes';

export const updateSort = createAction(actionTypes.UPDATE_SORT);

export const updateStopsFilter = createAction(actionTypes.UPDATE_FILTERS);

export const getSearchId = () => async (dispatch) => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  const data = await response.json();

  dispatch({
    type: actionTypes.GET_SEARCH_ID,
    payload: data.searchId,
  });
};

export const getTickets = (searchId) => async (dispatch) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: actionTypes.GET_TICKETS,
        tickets: data.tickets,
        stopFetching: data.stop,
      });
    } else {
      dispatch({ type: actionTypes.GET_TICKETS, tickets: [{ error: 'error' }] });
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_TICKETS, tickets: [{ error: 'error' }] });
  }
};
