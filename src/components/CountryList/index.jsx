/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import React from 'react';
import { useSelector } from 'react-redux';

import CountryCard from '../CountryCard';
import { getFilteredCountries } from '../../utils';
import './CountryList.scss';

function CountryList() {
  const { preLoading, countries, filters } = useSelector((state) => state);

  if (preLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="country-list">
      {getFilteredCountries(countries, filters).map((country) => <CountryCard country={country} key={country.countryCode} />)}
    </div>
  );
}

export default CountryList;
