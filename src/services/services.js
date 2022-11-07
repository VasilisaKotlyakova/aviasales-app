/* eslint-disable */
import {actionKeyApi, actionSendTickets} from '../store/reducers/ticketReducer';

const baseUrl = 'https://front-test.dev.aviasales.ru/';
export const fetchSearchId = () => {
  return function (dispatch) {
    fetch(`${baseUrl}search`)
      .then((res) => res.json())
      .then((json) => dispatch(actionKeyApi(json.searchId )))
      .catch((err) => new Error(err));
  };
};

export const fetchTickets = (searchId) => {
  const stop = false;
  return async (dispatch) => {
    if (typeof searchId === 'string' && !stop) {
      // eslint-disable-next-line no-inner-declarations
      async function searchTickets() {
        fetch(`${baseUrl}tickets?searchId=${searchId}`)
          .then((res) => {
            if (res.status === 500) {
              searchTickets();
              throw Error('Упс, статус запроса 500, похоже на какую-то ошибку');
            } else {
              return res.json();
            }
          })
          .then((tikets) => {
            dispatch(actionSendTickets(tikets));
            if (tikets.stop) {
              dispatch(actionSendTickets(tikets));
            }
            searchTickets();
          })
          .catch((e) => {
            console.log(e, 'Ошибка');
          });
      }
      searchTickets();
    }
  };
};
