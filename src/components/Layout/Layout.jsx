import React, { Suspense } from 'react'
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
      <>
          <Header />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>          
      </>
  )
} 

export default Layout;
