/* eslint-disable */
import React from 'react';
import './show-tickets.css';
import { useDispatch } from 'react-redux';

import { actionMoreShowTickets } from '../../store/reducers/ticketReducer';

function ShowTickets() {
  const dispatch = useDispatch();
  return (
    <button type="button" className="button__show-tickets" onClick={() => dispatch(actionMoreShowTickets())}>
      Показать еще 5 билетов!
    </button>
  );
}

export default ShowTickets;
