import React, { useState, useEffect } from "react";
import { getTrending } from "api-service/trending-service";
// import { NavLink } from "react-router-dom";
import { FlexItemList, StyledLink, FilmTitleImage, FlexItemDescription, TitleFilm, ShellForItemText, FlexItemTextStyle } from "./HomePage.styled";
import { Outlet } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Notiflix from "notiflix";

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
      <FlexItemList>
        {data.map(
          ({
            id,
            original_title,
            release_date,
            poster_path,
            vote_average,          
          }) => ( 
            <li key={id}>
              <StyledLink to={`movies/${id}`}>
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
    <Outlet /> 
    </>
  )
}

HomePage.propTypes = {};

export default HomePage;