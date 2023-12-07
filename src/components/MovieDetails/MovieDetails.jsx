import React, { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetailInfoById } from 'api-service/trending-service';
import { Notify } from 'notiflix';
import {
    ContainerForMovieDetails,
    BackgroundContainerImageMovie,
    BackgroundImageMovie,
    SectionDetails,
    CastElementList,
    CastElement,
    CastLink,
    ReviewsLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();

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
                        <BackgroundImageMovie src={`https://image.tmdb.org/t/p/w300/${movieDetails.backdrop_path }`}>
                        </BackgroundImageMovie>
                    </BackgroundContainerImageMovie>
                    <SectionDetails>
                        <img
                        src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
                        alt={movieDetails.original_title}
                    />
                    <div>
                        <div>
                                <h2>{movieDetails.original_title}</h2>
                                <p>{movieDetails.runtime}min</p>
                            <div>
                                <p>{movieDetails.release_date.slice(0, 4)}</p>
                                <span>User Score: 
                                    {movieDetails.vote_average === 0
                                        ? '-'
                                        : parseFloat((movieDetails.vote_average).toFixed(1).toString().replace('', ' '))}
                                    %🏆
                                </span>
                                </div>
                                <p>Overview: { movieDetails.overview }</p>
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


//  const {
//         id,
//         backdrop_path,
//         original_language,
//         original_title,
//         overview,
//         poster_path,
//         release_date,
//         title,
//         vote_average
//     } = movies || [];


// getDetailInfoById(movieId)
//     .then(response => response.json())
//     .then(data => { console.log(data); setData(data.results)})
//     .catch(err => console.log(err));