/* eslint-disable */
const initialState = {
  ticketList: [],
  searchId: 0,
  stop: false,
  numberShowTickets: 5,
};

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SEND_KEY_API': return {...state, searchId: action.payload};
  case 'SEND_TICKETS':
    return {...state, ticketList: [...state.ticketList, ...action.payload.tickets], stop: action.payload.stop};
  case 'MORE_SHOW_TICKETS':
    return {...state, numberShowTickets: state.numberShowTickets + 5};
  default:
    return state;
  }
};

export default ticketsReducer;
