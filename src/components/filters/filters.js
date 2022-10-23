import React from 'react';
import './filters.css';
import { useDispatch, useSelector } from 'react-redux';

function Filters() {
  const filters = useSelector((state) => state.filters.filters);
  const dispatch = useDispatch();
  const onFilterTransfer = (filterName) => {
    dispatch({ type: 'FILTERS_TICKETS', payload: filterName });
  };
  return (
    <div className="filters">
      <span className="filters__name">Количество пересадок</span>
      <div className="filters__label">
        <label htmlFor="label1" className="custom-checkbox" onChange={() => onFilterTransfer(4)}>
          <input id="label1" type="checkbox" checked={filters[4].isChecked} onChange={() => true} />
          <span className="filters__label-name">Все</span>
        </label>
        <label htmlFor="label2" className="custom-checkbox" onChange={() => onFilterTransfer(0)}>
          <input id="label2" type="checkbox" checked={filters[0].isChecked} onChange={() => true} />
          <span className="filters__label-name">Без пересадок</span>
        </label>
        <label htmlFor="label3" className="custom-checkbox" onChange={() => onFilterTransfer(1)}>
          <input id="label3" type="checkbox" checked={filters[1].isChecked} onChange={() => true} />
          <span className="filters__label-name">1 пересадка</span>
        </label>
        <label htmlFor="label4" className="custom-checkbox" onChange={() => onFilterTransfer(2)}>
          <input id="label4" type="checkbox" checked={filters[2].isChecked} onChange={() => true} />
          <span className="filters__label-name">2 пересадки</span>
        </label>
        <label htmlFor="label5" className="custom-checkbox" onChange={() => onFilterTransfer(3)}>
          <input id="label5" type="checkbox" checked={filters[3].isChecked} onChange={() => true} />
          <span className="filters__label-name">3 пересадки</span>
        </label>
      </div>
    </div>
  );
}

export default Filters;
