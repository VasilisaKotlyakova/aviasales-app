/* eslint-disable */
import React from 'react';

import './ticket.css';

function Ticket({ cost, carrier, segments }) {
  const price = String(cost).replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  const duration = (min) => {
    if (min >= 60) {
      return `${Math.floor(min / 60)}ч ${min % 60}м`;
    } else {
      return `${min}м`;
    }
  };

  const time = (start, durationNow) => {
    const dateStart = new Date(start);
    const dateStartString =
      (String(dateStart.getHours()).length === 2 ? dateStart.getHours() : '0' + dateStart.getHours()) +
      ':' +
      (String(dateStart.getMinutes()).length === 2 ? dateStart.getMinutes() : '0' + dateStart.getMinutes());

    const dateEnd = new Date(durationNow * 60 * 1000 + dateStart.getTime());
    const dateEndString =
      (String(dateEnd.getHours()).length === 2 ? dateEnd.getHours() : '0' + dateEnd.getHours()) +
      ':' +
      (String(dateEnd.getMinutes()).length === 2 ? dateEnd.getMinutes() : '0' + dateEnd.getMinutes());
    return `${dateStartString} - ${dateEndString}`;
  };

  const transferCount = (count) => {
    switch (count) {
      case 0:
        return 'Без  пересадок';
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      default:
        return '';
    }
  };

  return (
    <div className="ticket-card">
      <div className="container">
        <div className="ticket-card__header">
          <div className="ticket-card__header-cost">{price} Р</div>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="avia logo" />
        </div>
        <div className="ticket-card__route">
          <div className="ticket-card__route-destination">
            <span className="ticket-card__route-destination-name">
              {segments[0].origin} – {segments[0].destination}
            </span>
            <span className="ticket-card__route-destination-value">{time(segments[0].date, segments[0].duration)}</span>
          </div>
          <div className="ticket-card__route-time">
            <span className="ticket-card__route-time-name">В пути</span>
            <span className="ticket-card__route-time-value">{duration(segments[0].duration)}</span>
          </div>
          <div className="ticket-card__route-count-transfers">
            <span className="ticket-card__route-count-transfers-name">{transferCount(segments[0].stops.length)}</span>
            <span className="ticket-card__route-count-transfers-value">{segments[0].stops.join(', ')}</span>
          </div>
        </div>
        <div className="ticket-card__route-back">
          <div className="ticket-card__route-back-destination">
            <span className="ticket-card__route-back-destination-name">
              {segments[1].origin} – {segments[1].destination}
            </span>
            <span className="ticket-card__route-back-destination-value">
              {time(segments[1].date, segments[1].duration)}
            </span>
          </div>
          <div className="ticket-card__route-back-time">
            <span className="ticket-card__route-back-time-name">В пути</span>
            <span className="ticket-card__route-back-time-value">{duration(segments[1].duration)}</span>
          </div>
          <div className="ticket-card__route-back-count-transfers">
            <span className="ticket-card__route-back-count-transfers-name">
              {transferCount(segments[1].stops.length)}
            </span>
            <span className="ticket-card__route-back-count-transfers-value">{segments[1].stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
