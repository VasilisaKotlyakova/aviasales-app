import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import filterReducer from './reducers/filterReducer';
import ticketsReducer from './reducers/ticketReducer';
import sortReducer from './reducers/sortReducer';

const rootReducer = combineReducers({
  filters: filterReducer,
  tickets: ticketsReducer,
  sort: sortReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
