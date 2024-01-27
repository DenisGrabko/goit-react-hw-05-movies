import React from 'react';
import { useLocation,  Link } from 'react-router-dom'; 
import {
    FlexItemList,
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
                            <Link to={`/movies/${id}`} state={{ from: location }} style={{textDecoration:'none'}}>
                                <FilmTitleImage
                                    src={poster_path ? 
                                        `https://image.tmdb.org/t/p/w300/${poster_path}` : 
                                        'https://thefutureofthings.com/wp-content/uploads/2021/01/cinema-4153289_1280-1024x660.jpg'}
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


