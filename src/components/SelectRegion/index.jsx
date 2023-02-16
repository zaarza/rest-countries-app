import React from 'react';
import './SelectRegion.scss';

function SelectRegion() {
  return (
    <div className="select-region">
      <select id="select-region" className="select-region__selector" defaultValue="">
        <option className="select-region__option" value="" disabled defaultChecked hidden>Filter by region</option>
        <option className="select-region__option" value="">All</option>
        <option className="select-region__option" value="Lorem">Lorem ipsum</option>
        <option className="select-region__option" value="Lorem">Dolor sit</option>
      </select>
      <svg className="select-region__icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
      </svg>
    </div>
  );
}

export default SelectRegion;
