/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import './Detail.scss';

function Detail() {
  return (
    <div className="detail">
      <Link to="/" className="detail__back">
        <span className="detail__back-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z" /></svg>
        </span>
        <span className="detail__back-text">Back</span>
      </Link>

      <div className="detail__body">
        <div className="detail__body-flag">
          <img className="detail__body-flag__image" src="assets/images/de.png" alt="" />
        </div>
        <div className="detail__body-description">
          <h1 className="detail__body-description__name">German</h1>

          {/* Property */}
          <div className="detail__body-description__info">
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Native Name:</p>
              <p className="detail__body-description__value">Belgie</p>
            </div>
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Population:</p>
              <p className="detail__body-description__value">81,770,900</p>
            </div>
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Region:</p>
              <p className="detail__body-description__value">Europe</p>
            </div>
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Sub Region:</p>
              <p className="detail__body-description__value">Western Europe</p>
            </div>
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Capital:</p>
              <p className="detail__body-description__value">Berlin</p>
            </div>
          </div>
          <div className="detail__body-description__info">
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Top Level Domain:</p>
              <p className="detail__body-description__value">.de</p>
            </div>
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Currencies:</p>
              <p className="detail__body-description__value">Euro</p>
            </div>
            <div className="detail__body-description__property">
              <p className="detail__body-description__key">Languanges:</p>
              <p className="detail__body-description__value">German</p>
            </div>
          </div>

          <div className="detail__body-description__border">
            <h2 className="detail__body-description__border-title">Border Countries:</h2>
            <ul className="detail__body-description__border-list">
              <li className="detail__body-description__border-list__item">France</li>
              <li className="detail__body-description__border-list__item">France</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
