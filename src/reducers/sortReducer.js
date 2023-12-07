import { actionTypes } from '../actions/actionTypes';

const sortReducer = (state = 'cheapest', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default sortReducer;
