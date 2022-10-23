import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'antd';

import './app.css';
import Logo from '../../img/Logo.svg';
import TicketList from '../tickets-list';
import Filters from '../filters';
import SortButtons from '../sort-buttons';
import { fetchSearchId, fetchTickets } from '../../services/services';

function App() {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.tickets.searchId);
  const stop = useSelector((state) => state.tickets.stop);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTickets(searchId));
  }, [searchId, stop]);

  const ticketsNow = useSelector((state) => state.tickets.ticketList);
  const ticketPercent = Math.floor((ticketsNow.length / 9700) * 100);

  let progress;
  if (ticketPercent < 100) {
    progress = (
      <div className="progress">
        <h2>Ищем билеты</h2>
        <Progress
          className="progress-but"
          strokeLinecap="butt"
          percent={Math.floor((ticketsNow.length / 9700) * 100)}
          strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }}
        />
      </div>
    );
  } else progress = <div> </div>;

  return (
    <div className="wrapper">
      <header>
        <img src={Logo} alt="logo aviasales" />
      </header>
      {progress}
      <main>
        <Filters />
        <div className="main-container">
          <SortButtons />
          <TicketList />
        </div>
      </main>
    </div>
  );
}

export default App;
