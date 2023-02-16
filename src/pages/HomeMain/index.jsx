import React from 'react';
import { SearchBar, SelectRegion, CountryList } from '../../components';
import './HomeMain.scss';

function HomeMain() {
  return (
    <main className="home-main">
      <div className="home-main__action">
        <SearchBar />
        <SelectRegion />
      </div>
      <CountryList />
    </main>
  );
}

export default HomeMain;
