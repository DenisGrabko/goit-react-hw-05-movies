import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from '../../api-service/trending-service';
import { GlobalSection, ReviewsList, ReviewsItem, ReviewsTitle, ReviewsText } from "./Reviews.styled";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const result = await getMovieReviews(movieId);
                // console.log('data: >>', result);
                setReviews(result);
                
            } catch (error) {
                console.error('Error fetching actors list:', error);
            }
        };

        fetchReviews();
    }, [movieId]);

    return (
        <>
        <GlobalSection>
            <ReviewsList>
      {reviews.length === 0 ? <li> <p>Empty reviews details</p> </li> : (
                <ReviewsItem>
                    {reviews.map(({ id, author, content }) => {
                        return (
                            <div key={id}>
                            <ReviewsTitle>Author: {author}</ReviewsTitle>
                            <ReviewsText>{content}</ReviewsText>
                            </div>
                        );
                        
                    })}                    
                </ReviewsItem>
                )}
            </ReviewsList>
        </GlobalSection>
            
        </>
    )
}

export default Reviews;