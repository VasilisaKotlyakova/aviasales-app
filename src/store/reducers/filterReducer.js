/* eslint-disable */
const initialState = {
  filters: [
    { title: 'Без пересадок', stopCount: 0, isChecked: true },
    { title: '1 пересадка', stopCount: 1, isChecked: false },
    { title: '2 пересадки', stopCount: 2, isChecked: false },
    { title: '3 пересадки', stopCount: 3, isChecked: false },
  ],
};

const filterReducer = (state= initialState, action) => {
  switch(action.type) {
  case 'FILTERS_TICKETS':
    return {filters: state.filters.map((item) =>
        item.stopCount === action.payload ? { ...item, isChecked: !item.isChecked } : item)};
  case 'FILTERS_TICKETS_ALL':
    const newFilter = state.filters;
    return {
      filters: newFilter.map((item) => ({
        ...item,
        isChecked: action.payload,
      }))
    };
  default: return state;
  }
};

export default filterReducer;
