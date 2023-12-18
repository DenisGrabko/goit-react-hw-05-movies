import React, { useState, useEffect } from "react";
import { getTrending } from "api-service/trending-service";
import MovieList from "components/MovieList/MovieList";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getTrending()
      .then(setData)
      .catch(() => Notify.failure('Something went wrong'));     
}, [])

  return (
    <>
    <section>
      <div>
        <MovieList movies={data}/>
      </div>       
    </section>
    </>
  )
}

 HomePage.propTypes = {};

 export default HomePage;
