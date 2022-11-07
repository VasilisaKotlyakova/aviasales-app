/* eslint-disable */
import { SORT_TICKETS } from '../action';

const initialState = {
  sortType: 'cheap'
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_TICKETS:
      return { sortType: action.payload };
    default:
      return state;
  }
};

export default sortReducer;

export const actionSortTickets = (payload) => {
  return { type: SORT_TICKETS, payload }
}
