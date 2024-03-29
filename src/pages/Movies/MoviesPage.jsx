import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
import MovieList from "components/MovieList/MovieList";

import { SearchMovieByName } from "api-service/trending-service";
import { Notify } from "notiflix";
import { MovieHeaderTitle } from "./MoviesPage.styled";


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
    setSearchInfo({ query });
  };

  return (
    <>
      <MovieHeaderTitle>What do you want to find?</MovieHeaderTitle>
      <SearchForm handleSubmit={handleSubmit} />      
      <MovieList movies={movies} />
    </>
  );
};


export default MoviesPage;





