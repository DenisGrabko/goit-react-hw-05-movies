import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1400px;
    padding: 15px 45px 0 20px;
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
    height: 100px;
    display: flex;
    padding-top: 4px;
    column-gap: 25px;    
`;

export const StyledLink = styled(NavLink)`
    width: 100px;
    height: 100%;
    text-decoration: none;
    position: relative;
    color: #c9c9c9;
    transition: color 200ms ease-in-out ;        
    font-size: 25px;
    line-height: 3;
    letter-spacing: 0.005em;
    font-weight: bold;

    /* font: italic small-caps bold 25px/3 cursive;  */

    &.active {
        color: #fff;
    }  
    &:hover { 
        color: #fff;
    }
`