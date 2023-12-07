import React from 'react';
import { StyledHeader, WrapperLogo, LogoImage, NavBar, StyledLink } from './Header.styled';

const Header = () => {
  return (
      <>
          <StyledHeader>
              <WrapperLogo to="/">
                  <LogoImage src='https://img.freepik.com/premium-vector/cinema-movie-logo-with-gradient-background-template_502990-937.jpg'
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