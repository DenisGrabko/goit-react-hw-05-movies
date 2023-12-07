import React, { useState, useEffect } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import { Notify } from 'notiflix';
// import { getDetailInfoById } from 'api-service/trending-service';
import {
    FlexItemList,
    StyledLink,
    FilmTitleImage,
    FlexItemDescription,
    TitleFilm,
    ShellForItemText,
    FlexItemTextStyle
} from "./MovieList.styled";


const MovieList = ({ movies }) => {
    // const [movie, setMovie] = useState(null);
    // const { movieId } = useParams();
    // const location = useLocation();

    // useEffect(() => {
    //     getDetailInfoById(movieId)
    //         .then(setMovie);
    
    //   return () => {
    //       Notify.failure('Something went wrong');
    //   }
    // }, [movieId])
         


  return (      
      <section>
      <FlexItemList>
        {movies.map(
          ({
            id,
            original_title,
            release_date,
            poster_path,
            vote_average,          
          }) => ( 
            <li key={id}>
                    <StyledLink to={`movies/${id}`}>   {/* state={{from: location} */}
                <FilmTitleImage
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={original_title}
                  >                  
                </FilmTitleImage>
                <div>
                  <FlexItemDescription>
                    <TitleFilm>{original_title}</TitleFilm>
                    <ShellForItemText>
                      <FlexItemTextStyle>{release_date.slice(0, 4)}</FlexItemTextStyle>
                      <FlexItemTextStyle>{vote_average === 0 ? '-' : vote_average.toFixed(1)}🏆</FlexItemTextStyle>
                    </ShellForItemText>                    
                  </FlexItemDescription>
                </div>
              </StyledLink>
            </li>)
        )}
      </FlexItemList>      
    </section>      
  )
}
export default MovieList;