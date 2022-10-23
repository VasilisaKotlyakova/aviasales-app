/* eslint-disable */
const initialState = {
  sortType: '',
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT_TICKETS':
      return { sortType: action.payload };
    default:
      return state;
  }
};

export default sortReducer;
