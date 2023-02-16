import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, HomeMain, Detail } from './pages';
import './styles/main.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<HomeMain />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
