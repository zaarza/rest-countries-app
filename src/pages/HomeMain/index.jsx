import React from 'react';
import { SearchBar, SelectRegion, CountryList } from '../../components';
import './HomeMain.scss';

function HomeMain() {
  return (
    <main className="home-main">
      <SearchBar />
      <SelectRegion />
      <CountryList />
    </main>
  );
}

export default HomeMain;
