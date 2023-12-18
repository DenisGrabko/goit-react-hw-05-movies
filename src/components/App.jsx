import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>  
        <Route path='movies' element={<MoviesPage />} />  
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<Cast/>}></Route>
          <Route path='reviews' element={<Reviews/>}></Route>
        </Route>
      </Route>
      <Route path='*' element={<Navigate to='/' />}/>
    </Routes>
    )
  
}

export default App;