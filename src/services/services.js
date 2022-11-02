/* eslint-disable */
export const fetchSearchId = () => {
  return function (dispatch) {
    fetch(`https://front-test.dev.aviasales.ru/search`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: 'SEND_KEY_API', payload: json.searchId }))
      .catch((err) => new Error(err));
  };
};

export const fetchTickets = (searchId) => {
  const stop = false;
  return async (dispatch) => {
    if (typeof searchId === 'string' && !stop) {
      // eslint-disable-next-line no-inner-declarations
      async function searchTickets() {
        fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
          .then((res) => {
            if (res.status === 500) {
              searchTickets();
              throw Error('Упс, статус запроса 500, похоже на какую-то ошибку');
            } else {
              return res.json();
            }
          })
          .then((tikets) => {
            dispatch({ type: 'SEND_TICKETS', payload: tikets });
            if (tikets.stop) {
              dispatch({
                type: 'SEND_TICKETS',
                payload: tikets,
              });
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
