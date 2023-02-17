import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Home, HomeMain, Detail } from './pages';
import store from './states';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeMain />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
