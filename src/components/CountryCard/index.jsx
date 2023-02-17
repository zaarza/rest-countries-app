/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.scss';

function CountryCard({ country }) {
  const {
    name, population, region, capital, flags,
  } = country;

  return (
    <Link to="/detail">
      <div className="country-card">
        <div className="country-card__flag-wrapper">
          <img className="country-card__flag-image" src={flags.svg} alt="" />
        </div>
        <div className="country-card__body">
          <h1 className="country-card__country-name">{name.common}</h1>
          <div className="country-card__description">
            <p className="country-card__property"><span className="country-card__key">Population:</span> <span className="country-card__value">{population}</span></p>
            <p className="country-card__property"><span className="country-card__key">Region:</span> <span className="country-card__value">{region}</span></p>
            <p className="country-card__property"><span className="country-card__key">Capital:</span> <span className="country-card__value">{capital}</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
