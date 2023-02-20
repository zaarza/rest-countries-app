/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { asyncGetDetailCountryByFullName, asyncGetDetailCountryByCode, receiveDetailCountryActionCreator } from '../../states/countryDetail/action';
import { asyncGetAllCountries } from '../../states/countries/action';
import { joinLanguages, populationFormatter } from '../../utils';
import './Detail.scss';

function Detail() {
  const { countryCode } = useParams();
  const dispatch = useDispatch();
  const { countryDetail, countries } = useSelector((state) => state);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(asyncGetAllCountries());
    }
    dispatch(asyncGetDetailCountryByCode(countryCode));
    return () => {
      dispatch(receiveDetailCountryActionCreator([]));
    };
  }, [dispatch]);

  if (Object.keys(countryDetail).length === 0) {
    return <p>Loading</p>;
  }

  return (
    <div className="detail">
      <Link to="/" className="detail__back">
        <span className="detail__back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" /></svg>
        </span>
        <span className="detail__back-text">Back</span>
      </Link>

      <div className="detail__body">
        <div className="detail__flag">
          <img className="detail__flag-image" src={countryDetail.flags.svg} alt="" />
        </div>
        <div className="detail__description">
          <h1 className="detail__name">{countryDetail.name}</h1>

          {/* Property */}
          <div className="detail__info">
            <div className="detail__details">
              <div className="detail__property">
                <p className="detail__key">Native Name:</p>
                <p className="detail__value">{countryDetail.nativeName || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Population:</p>
                <p className="detail__value">{populationFormatter(countryDetail.population) || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Region:</p>
                <p className="detail__value">{countryDetail.region || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Sub Region:</p>
                <p className="detail__value">{countryDetail.subregion || 'unknown'}</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Capital:</p>
                <p className="detail__value">{countryDetail.capital || 'unknown'}</p>
              </div>
            </div>
            <div className="detail__details">
              <div className="detail__property">
                <p className="detail__key">Top Level Domain:</p>
                {countryDetail.topLevelDomain.map((tld) => (
                  <p className="detail__value">{tld}</p>
                ))}

              </div>
              <div className="detail__property">
                <p className="detail__key">Currencies:</p>
                {countryDetail.currencies !== undefined && countryDetail.currencies.map((currency) => (
                  <p className="detail__value">{currency.name}</p>
                ))}
              </div>
              <div className="detail__property">
                <p className="detail__key">Languanges:</p>
                <p className="detail__value">{joinLanguages(countryDetail.languages)}</p>
              </div>
            </div>
          </div>

          {/* <li className="detail__border-item">{border}</li> */}

          {countryDetail.borders !== undefined && (
          <div className="detail__border">
            <h2 className="detail__border-title">Border Countries:</h2>
            <ul className="detail__border-list">
              {
                countryDetail.borders.map((border) => {
                  const fullCountryName = countries.find((country) => country.countryCode === border);
                  return (
                    <li onClick={() => dispatch(asyncGetDetailCountryByFullName(fullCountryName.name))} className="detail__border-item">{fullCountryName.name}</li>
                  );
                })
              }
            </ul>
          </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Detail;
