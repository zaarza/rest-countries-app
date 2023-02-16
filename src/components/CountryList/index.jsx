/* eslint-disable import/no-cycle */
import React from 'react';
import { CountryCard } from '..';
import './CountryList.scss';

function CountryList() {
  return (
    <ul className="country-list">
      <li className="country-list__item">
        <CountryCard />
      </li>
      <li className="country-list__item">
        <CountryCard />
      </li>
    </ul>
  );
}

export default CountryList;
