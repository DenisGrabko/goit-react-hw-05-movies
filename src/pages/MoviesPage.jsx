import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
import MovieList from "components/MovieList/MovieList";

import { SearchMovieByName } from "api-service/trending-service";
import { Notify } from "notiflix";


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchInfo, setSearchInfo] = useSearchParams();

  useEffect(() => {
    const movie = searchInfo.get('query');
    if (!movie) return;

    SearchMovieByName(movie)
      .then(({ results }) => {
        setMovies(results);
        console.log(results);
      })
      .catch(() => {
        Notify.failure('Something went wrong');
      });
  }, [searchInfo]);

  const handleSubmit = (query) => {
    if (!query) return;
    setSearchInfo({ query });
  };

  return (
    <>
      <h2>What do you want to find?</h2>
      <SearchForm handleSubmit={handleSubmit} />
      
      <MovieList movies={movies} />
    </>
  );
};


export default MoviesPage;






// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SearchForm from 'components/Movies/SearchForm/SearchForm';
// import MovieList from 'components/MovieList/MovieList';
// import { SearchMovieByName } from 'api-service/trending-service';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchInfo, setSearchInfo] = useSearchParams();

//   useEffect(() => {
//     const movie = searchInfo.get('query');

//     if (!movie) return;

    
//     SearchMovieByName(movie)
//       .then(({ results }) => {
//         setMovies(results);
//       })
//       .catch(() => {
//         Notify.failure('Opps. Something went wrong. Please refresh the page');
//       })
      
//   }, [searchInfo]);

//   const handleSubmit = query => {
//     if (!query) return;
//     setSearchInfo({ query: query });
//   };

//   return (
//     <>
//       <div>
//         <div>
//           <h2>What do you want to watch?</h2>
//           <SearchForm handleSubmit={handleSubmit} />

//           <MovieList movies={movies} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MoviesPage;
