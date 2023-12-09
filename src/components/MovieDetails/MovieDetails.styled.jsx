import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ContainerForMovieDetails = styled.li`
  list-style-type: none;
`;

export const BackgroundContainerImageMovie = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  list-style-type: none;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: ${props => `url(${props.backdrop})`} center no-repeat;*/
    background-size: cover; 
   
    z-index: -1;
  }
`;

export const BackgroundImageMovie = styled.img`
    width: 100%;
    height: 100%; 
    filter: blur(7px);
`;

export const SectionDetails = styled.section`
    display: flex;
    /* align-items: center; */
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    gap: 10px;
`;

export const BackPathButton = styled(NavLink)`
  color: grey;
  text-decoration: none;
`
export const CastElementList = styled.ul`
     display: flex;
     flex-direction: row;     
     justify-content: space-between;
     padding-left: 10px;
     width: 200px;
`;

export const CastElement = styled.li`
    list-style-type: none;
`;

export const CastLink = styled(NavLink)`
    color: grey;
    font-size: 2rem;
    text-decoration: none;
`;

export const ReviewsLink = styled(NavLink)`
    color: grey;
    font-size: 2rem;
    text-decoration: none;
`;