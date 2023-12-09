import React from 'react';  //, { useState, useEffect } 
import { useLocation,  Link } from 'react-router-dom'; //useParams,
// import { Notify } from 'notiflix';
// import { getDetailInfoById } from 'api-service/trending-service';
import {
    FlexItemList,
    // StyledLink,
    FilmTitleImage,
    FlexItemDescription,
    TitleFilm,
    ShellForItemText,
    FlexItemTextStyle
} from "./MovieList.styled";


const MovieList = ({ movies }) => {
    
    const location = useLocation();
    
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
                            <Link to={`/movies/${id}`} state={{ from: location }}>
                                <FilmTitleImage
                                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                                    alt={original_title}
                                />
                                <div>
                                    <FlexItemDescription>
                                        <TitleFilm>{original_title}</TitleFilm>
                                        <ShellForItemText>
                                            <FlexItemTextStyle>{release_date.slice(0, 4)}</FlexItemTextStyle>
                                            <FlexItemTextStyle>{vote_average === 0 ? '-' : vote_average.toFixed(1)}🏆</FlexItemTextStyle>
                                        </ShellForItemText>                    
                                    </FlexItemDescription>
                                </div>
                            </Link>
                        </li>)
                )}
            </FlexItemList>      
        </section>      
    );
};

export default MovieList;


//const [movie, setMovie] = useState(null);
    // const { movieId } = useParams();
   
    // useEffect(() => {
    //     getDetailInfoById(movieId)
    //         .then(setMovie)
    //         .catch(() => Notify.failure('Something went wrong'));
    // }, [movieId]);