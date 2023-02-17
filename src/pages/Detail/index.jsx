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
        <div className="detail__flag">
          <img className="detail__flag-image" src="assets/images/de.png" alt="" />
        </div>
        <div className="detail__description">
          <h1 className="detail__name">German</h1>

          {/* Property */}
          <div className="detail__info">
            <div className="detail__details">
              <div className="detail__property">
                <p className="detail__key">Native Name:</p>
                <p className="detail__value">Belgie</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Population:</p>
                <p className="detail__value">81,770,900</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Region:</p>
                <p className="detail__value">Europe</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Sub Region:</p>
                <p className="detail__value">Western Europe</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Capital:</p>
                <p className="detail__value">Berlin</p>
              </div>
            </div>
            <div className="detail__details">
              <div className="detail__property">
                <p className="detail__key">Top Level Domain:</p>
                <p className="detail__value">.de</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Currencies:</p>
                <p className="detail__value">Euro</p>
              </div>
              <div className="detail__property">
                <p className="detail__key">Languanges:</p>
                <p className="detail__value">German</p>
              </div>
            </div>
          </div>

          <div className="detail__border">
            <h2 className="detail__border-title">Border Countries:</h2>
            <ul className="detail__border-list">
              <li className="detail__border-item">France</li>
              <li className="detail__border-item">France</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
