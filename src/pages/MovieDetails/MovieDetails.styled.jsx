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
    max-width: 1400px;
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
    gap: 10px;
`;

export const AllMovieDetailsContrainer = styled.div`
  margin-top: 35px;
`;

export const BackPathButtonContainer = styled.div`
  position: absolute;
  top: 750px;
  display: flex;
  justify-content: center;
  width: 60px;
  height: auto;
  border:solid 1px #41403E;
  @media (max-width: 768px) {
    top: 769px;
  }

&:hover {
  box-shadow:2px 8px 4px -6px hsla(0, 0%, 0%, .3);      
  border:solid 2px #41403E;
  color: #41403E;  
}
`;

export const BackPathButton = styled(NavLink)`
width: 60px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
color: grey;
text-decoration: none;
`;

export const MovieDetailsTitle = styled.h2`
color: grey;
`;

export const MovieDetailsText = styled.p`
color: grey;
`;

export const MovieDetailsScore = styled.span`
color: grey;
`;

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
