import React from 'react';
import { StyledHeader, WrapperLogo, LogoImage, NavBar, StyledLink } from './Header.styled';

const Header = () => {
  return (
      <>
          <StyledHeader>
              <WrapperLogo to="/">
                  <LogoImage src='https://cdn.icon-icons.com/icons2/2104/PNG/512/cinema_icon_129443.png'
                      alt='logo'
                  />
              </WrapperLogo>

              <NavBar>
                  <StyledLink to="/">Home</StyledLink>
                  <StyledLink to="/movies">Movies</StyledLink>
              </NavBar>              
          </StyledHeader>
      </>
  )
}

export default Header;