import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1400px;
    padding: 15px 45px 0 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const WrapperLogo = styled(Link)`
    max-width: 100%;
`

export const LogoImage = styled.img`
    border-radius: 20%;
    width: 100px;
`

export const NavBar = styled.nav`
    display: flex;
    column-gap: 25px;
`;

export const StyledLink = styled(NavLink)`
    width: 100px;
    text-decoration: none;
    position: relative;
    /* font-size: 190%; */
    color: #c9c9c9;
    transition: color 200ms ease-in-out ;
    font: italic small-caps bold 25px/3 cursive; 

    &.active {
        color: #fff;
    }  
    &:hover { 
        color: #fff;
    }
`