/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.scss';

function CountryCard() {
  return (
    <Link to="/detail">
      <div className="country-card">
        <div className="country-card__flag">
          <img className="country-card__flag-image" src="assets/images/de.png" alt="" />
        </div>
        <div className="country-card__body">
          <h1 className="country-card__body__name">German</h1>
          <div className="country-card__body__description">
            <p className="country-card__body__description-property"><span className="country-card__body__description-property__key">Population:</span> <span className="country-card__body__description-property__value">81,770,900</span></p>
            <p className="country-card__body__description-property"><span className="country-card__body__description-property__key">Region:</span> <span className="country-card__body__description-property__value">Europe</span></p>
            <p className="country-card__body__description-property"><span className="country-card__body__description-property__key">Capital:</span> <span className="country-card__body__description-property__value">Berlin</span></p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
