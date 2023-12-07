import { actionTypes } from '../actions/actionTypes';

const initialState = { all: true, 0: true, 1: true, 2: true, 3: true };

const stopsFilterReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case actionTypes.UPDATE_FILTERS:
      if (action.payload === 'all' && !state.all) {
        return initialState;
      }
      if (action.payload === 'all' && state.all) {
        return { all: false, 0: false, 1: false, 2: false, 3: false };
      }
      if (['0', '1', '2', '3'].includes(action.payload)) {
        newState[action.payload] = !state[action.payload];
        newState.all = Object.entries({ ...newState })
          .filter((item) => item[0] !== 'all')
          .every((item) => item[1] === true);
      }
      return newState;
    default:
      return state;
  }
};

export default stopsFilterReducer;
