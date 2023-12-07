import React from 'react'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
//import MovieDetails from 'components/MovieDetails/MovieDetails';

const Layout = () => {
  return (
      <>
          <Header />
          {/* <MovieDetails /> */}
          <Outlet />
      </>
  )
} 

export default Layout;
