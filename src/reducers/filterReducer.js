/* eslint-disable */
const initialState = {
  filters: [
    { stopCount: 0, isChecked: true },
    { stopCount: 1, isChecked: false },
    { stopCount: 2, isChecked: false },
    { stopCount: 3, isChecked: false },
    { stopCount: 4, isChecked: false },
  ],
};
const onFilter = (filters, nameCount) => {
  let newFilters = filters;
  newFilters[nameCount] = { stopCount: filters[nameCount].stopCount, isChecked: !filters[nameCount].isChecked };

  switch (true) {
  case (nameCount === 4 && filters[nameCount].isChecked):
      newFilters = filters.map((filter) => { return { stopCount: filter.stopCount, isChecked: true }});
      return { filters: newFilters };

  case (nameCount === 4 && !filters[nameCount].isChecked):
    newFilters = filters.map(filter => {return { stopCount: filter.stopCount, isChecked: false }});
    return { filters: newFilters };

  case (newFilters[0].isChecked === true && newFilters[1].isChecked === true
  && newFilters[2].isChecked === true && newFilters[3].isChecked === true):
    newFilters[4] = {stopCount: 4, isChecked: true}
    return { filters: newFilters };

  case (newFilters[nameCount].isChecked === false):
    newFilters[4] = {stopCount: 4, isChecked: false}
    return { filters: newFilters };

  default: return { filters: newFilters };
  }
};

const filterReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'FILTERS_TICKETS':
     const newFilter = onFilter(state.filters, action.payload);
     return newFilter;
  default:
    return state;
  }
};

export default filterReducer;
