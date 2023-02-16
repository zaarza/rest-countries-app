import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components';

function Home() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Home;
