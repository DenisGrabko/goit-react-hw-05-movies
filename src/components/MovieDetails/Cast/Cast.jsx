import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorsList } from 'api-service/trending-service';
import { GlobalSection, GlobalList, GlobalItem, CastList, CastItem, CastImage, CastText } from "./Cast.styled";

const Cast = () => {
  const [actorsList, setActorsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchActorsList = async () => {
      try {
        const result = await getActorsList(movieId);
        // console.log('data: >>', result);
        setActorsList(result);
      } catch (error) {
        console.error('Error fetching actors list:', error);
      }
    };

    fetchActorsList();
  }, [movieId]);

  return (
      <>
          <GlobalSection>
              <GlobalList>
            
      {actorsList.map(({ credit_id, name, character, profile_path }) => {
        const profileUrl = profile_path
          ? `https://image.tmdb.org/t/p/w300${profile_path}`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZNFpkJSy6LmJ9T9pg7QXLlU-eLWyblScCc1qaDXORkI5fqoQ9-AigZxvBjWjM_J_eEE&usqp=CAU';

          return (
            <GlobalItem key={credit_id}>
                <div >
                  <CastList>
                      <CastItem>
                          <CastImage src={profileUrl} alt={name} />
                              <CastText>{name}</CastText>
                              <CastText>{character}</CastText>
                      </CastItem>
                  </CastList>
                </div>
            </GlobalItem>   
        );     
      })}             
              </GlobalList>
          </GlobalSection>
        
    </>
  );
};

export default Cast;


// ({ credit_id, name, character, profile_path })