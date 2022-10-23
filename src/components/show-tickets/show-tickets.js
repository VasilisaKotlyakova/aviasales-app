import React from 'react';
import './show-tickets.css';
import { useDispatch } from 'react-redux';

function ShowTickets() {
  const dispatch = useDispatch();
  return (
    <button type="button" className="button__show-tickets" onClick={() => dispatch({ type: 'MORE_SHOW_TICKETS' })}>
      Показать еще 5 билетов!
    </button>
  );
}

export default ShowTickets;
