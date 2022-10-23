/* eslint-disable */
export const fetchSearchId = () => {
  return function (dispatch) {
    fetch(`https://aviasales-test-api.kata.academy/search`)
      .then((res) => res.json())
      .then((json) => dispatch({ type: 'SEND_KEY_API', payload: json.searchId }))
      .catch((err) => new Error(err));
  };
};

export const fetchTickets = (searchId) => {
  let stop = false;
  return function (dispatch) {
    if (typeof searchId === 'string' && !stop) {
      async function searchTickets() {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
          .then((res) => {
            if (res.status === 500) {
              searchTickets();
              throw Error('Cтатус запроса 500');
            } else {
              return res.json();
            }
          })
          .then((json) => {
            stop = json.stop;
            dispatch({ type: 'SEND_TICKETS', payload: json });
            if (stop) {
              return dispatch({
                type: 'SEND_TICKETS',
                payload: json,
              });
            }
            searchTickets();
          })
          .catch((err) => new Error(err));
      }
      searchTickets();
    }
  };
};
