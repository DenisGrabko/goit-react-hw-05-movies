import React, { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getDetailInfoById } from 'api-service/trending-service';
import { Notify } from 'notiflix';
import {
    ContainerForMovieDetails,
    BackgroundContainerImageMovie,
    BackgroundImageMovie,
    SectionDetails,
    BackPathButton,
    CastElementList,
    CastElement,
    CastLink,
    ReviewsLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/home';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const data = await getDetailInfoById(movieId);
                console.log('data: >>', data);
                setMovieDetails(data);
            } catch (error) {
                Notify.failure('Something went wrong');
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    return (
        <>
            {movieDetails && (
                <ContainerForMovieDetails key={movieDetails.id}>
                    <BackgroundContainerImageMovie>
                        <BackgroundImageMovie src={movieDetails.backdrop_path 
                    ? `https://image.tmdb.org/t/p/w300/${movieDetails.backdrop_path}`  
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4KoBreOsyrgj5WCIzA3DrztQ6R3bXg-PyQ&usqp=CAU'
                    }>
                        </BackgroundImageMovie>
                    </BackgroundContainerImageMovie>
                    <SectionDetails>
                        
                        <img
                            src={movieDetails.poster_path  
                               ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}` 
                               : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4KoBreOsyrgj5WCIzA3DrztQ6R3bXg-PyQ&usqp=CAU'}
                            alt={movieDetails.original_title}
                        />                        
                        <div>
                            <div>
                                <BackPathButton to={backLink}>Back</BackPathButton>
                                <h2>{movieDetails.original_title}</h2>
                                {movieDetails.runtime && <p>{movieDetails.runtime} min</p>}
                                <div>
                                    <p>{movieDetails.release_date.slice(0, 4)}</p>
                                    <span>User Score: 
                                        {movieDetails.vote_average === 0
                                            ? '-'
                                            : movieDetails.vote_average.toFixed(1)}%🏆
                                    </span>
                                </div>
                                <p>Overview: {movieDetails.overview}</p>
                            </div>
                        </div>
                    </SectionDetails>
                    <SectionDetails>
                        <CastElementList>
                            <CastElement>
                                <CastLink to="cast">Cast</CastLink>
                            </CastElement>
                            <CastElement>
                                <ReviewsLink to="reviews">Reviews</ReviewsLink>
                            </CastElement>
                        </CastElementList>
                    </SectionDetails>
                </ContainerForMovieDetails>
            )}
            <Outlet />
        </>
    );
};

export default MovieDetails;

