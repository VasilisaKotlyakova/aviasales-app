/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import './tickets-list.css';
import Ticket from '../ticket';
import ShowTickets from '../show-tickets';

function TicketsList() {
  const countTickets = useSelector((state) => state.tickets.numberShowTickets);

  function filterTickets(tickets, filters) {
    const preferredStopsCounts = filters.filter((filter) => filter.isChecked).map((filter) => filter.stopCount);
    return tickets.filter((ticket) => {
      return ticket.segments.every((segment) => {
        const stopCount = segment.stops.length;
        return preferredStopsCounts.includes(stopCount);
      });
    });
  }

  function sortTickets(tickets, sortType) {
    function durationOf(ticket) {
      return ticket.segments.reduce((total, segment) => total + segment.duration, 0);
    }
    function sortByPrice(ticketA, ticketB) {
      return ticketA.price - ticketB.price;
    }
    function sortByDuration(ticketA, ticketB) {
      return durationOf(ticketA) - durationOf(ticketB);
    }
    function sortByOptimal(ticketA, ticketB) {
      const totalA = ticketA.segments[0].duration + ticketA.segments[1].duration + ticketA.price;
      const totalB = ticketB.segments[0].duration + ticketB.segments[1].duration + ticketB.price;
      return totalA - totalB;
    }
    switch (true) {
      case sortType === 'cheap':
        return tickets.sort(sortByPrice);
      case sortType === 'fast':
        return tickets.sort(sortByDuration);
      case sortType === 'optimal':
        return tickets.sort(sortByOptimal);
      default: return tickets;
    }
  }
  const useTickets = () =>
    useSelector((state) => {
      const filTickets = filterTickets(state.tickets.ticketList, state.filters.filters);
      const sortedTickets = sortTickets(filTickets, state.sort.sortType);
      return sortedTickets;
    });

  const showTickets = useTickets();

  let isEmpty;
  if (showTickets) {
    isEmpty = showTickets.length === 0 ? true : false;
  }

  if(!!showTickets && !isEmpty) {
    const list = showTickets
      .slice(0, countTickets)
      .map((ticket) => <Ticket key={uuidv4()} cost={ticket.price} carrier={ticket.carrier} segments={ticket.segments} />);
    return (
      <>
        <div className="ticket-list">{list}</div>
        <ShowTickets />
      </>
    );
  } else {
    return (
      <div className="ticket-list">
        <span className="no-ticket-list">Рейсов, подходящих под заданные фильтры, не найдено</span>
      </div>
    );
  }
}

export default TicketsList;
