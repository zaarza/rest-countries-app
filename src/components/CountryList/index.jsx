/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllCountries } from '../../states/countries/action';
import CountryCard from '../CountryCard';
import './CountryList.scss';

function CountryList() {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncGetAllCountries());
  }, [dispatch]);

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <ul className="country-list">
      {countries.countriesList.countries.map((country) => (
        <li className="country-list__item">
          <CountryCard country={country} key={country.populaton} />
        </li>
      ))}
    </ul>
  );
}

export default CountryList;
