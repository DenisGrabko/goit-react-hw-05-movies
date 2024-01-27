import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const FlexItemList = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-around;
padding: 0 40px 0 40px;
column-gap: 15px;
row-gap: 15px;
margin-right: 73px;
max-width: 1400px;
margin-right: auto;
margin-left: auto;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const FlexItem = styled.li`
    display: flex;
    width: 300px !important;
    height: 550px;
`;

export const FilmTitleImage = styled.img`
    border-radius: 9%;
    width: 300px;
    height: 450px;
`;

export const FlexItemDescription = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TitleFilm = styled.h2`
    display: flex;
    flex-wrap: wrap;
    max-width: 289px;
    color: antiquewhite;
`;

export const ShellForItemText = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const FlexItemTextStyle = styled.p`
    color: antiquewhite;
`;

