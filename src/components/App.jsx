import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('./MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./MovieDetails/Reviews/Reviews'));

const App = () => {
  return (<Suspense fallback={<div>Loading...</div>}>
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
  </Suspense>)
  
}

export default App;