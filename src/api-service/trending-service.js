import axios from "axios";

const KEY = '8174f1744af1a46c4588fe70a373352a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: KEY,
};

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGJmYmIyNTA2NmM5ZTJhNjhkNzA0NmFkNTgxYjBlYyIsInN1YiI6IjY1NmI0YTY5MDg1OWI0MDEzOTUxMmZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JHtQht9lLzVGn8qQlSLZwC1_-cT8AoKj26qDOrlg0qc',
  },
};

export const getTrending = async () => {

    const { data } = await axios.get(
        'trending/movie/day?language=en-US',
        options
    );
    return data.results;
    };
 
export const getDetailInfoById = async (id) => {   
    const { data } = await axios.get(
        `/movie/${id}`,
        options
    );
    return data;
}

export const getActorsList = async (id) => {
    const { data } = await axios.get(
        `movie/${id}/credits`,
        options
    );
    return data.cast;
}

export const getMovieReviews = async (id) => {
    const { data } = await axios.get(
        `movie/${id}/reviews`,
        options
    );
    return data.results;
}

export const SearchMovieByName = async (name) => {
    const { data } = await axios.get(
    `search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
        options
    );
    return data;
}

