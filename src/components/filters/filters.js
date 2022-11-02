import React from 'react';
import './filters.css';
import { useDispatch, useSelector } from 'react-redux';

function Filters() {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const onFilterTransfer = (stopCount) => {
    dispatch({ type: 'FILTERS_TICKETS', payload: stopCount });
  };
  const onFilterTransferAll = (isChecked) => {
    dispatch({ type: 'FILTERS_TICKETS_ALL', payload: isChecked });
  };
  const checkAll = filters.every(({ isChecked }) => isChecked);
  return (
    <div className="filters">
      <span className="filters__name">Количество пересадок</span>
      <div className="filters__label">
        <label htmlFor="label1" className="custom-checkbox">
          <input type="checkbox" checked={checkAll} onChange={() => onFilterTransferAll(!checkAll)} />
          <span className="filters__label-name">Все</span>
        </label>
        {filters.map((filter, idx) => (
          <label key={filter.stopCount} htmlFor="label1" className="custom-checkbox">
            <input
              id={filter.stopCount}
              type="checkbox"
              checked={filter.isChecked}
              onChange={() => onFilterTransfer(idx)}
            />
            <span className="filters__label-name">{filter.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
