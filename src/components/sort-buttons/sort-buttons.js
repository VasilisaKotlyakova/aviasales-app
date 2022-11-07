/* eslint-disable */
import React from 'react';
import './sort-buttons.css';
import { useDispatch, useSelector } from 'react-redux';

import { actionSortTickets } from '../../store/reducers/sortReducer';

function SortButtons() {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.sort.sortType);
  return (
    <div className="sort-buttons">
      <button
        type="button"
        className={sortType === 'cheap' ? 'sort-button__cheap checked' : 'sort-button__cheap'}
        onClick={() => dispatch(actionSortTickets('cheap'))}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={sortType === 'fast' ? 'sort-button__fast checked' : 'sort-button__fast'}
        onClick={() => dispatch(actionSortTickets('fast'))}
      >
        Самый быстрый
      </button>
      <button
        type="button"
        className={sortType === 'optimal' ? 'sort-button__optimal checked' : 'sort-button__optimal'}
        onClick={() => dispatch(actionSortTickets('optimal'))}
      >
        Оптимальный
      </button>
    </div>
  );
}

export default SortButtons;
