import styled from "@emotion/styled";

export const SearchFormCustom = styled.form`
position: relative;
width: 30%;
padding-left: 15px;
@media (max-width:800px) {
    width: 75%;
}

 input {
  width: 100%;
  height: 42px;
  padding: 0 0 0 10px;
  border: 2px solid #7BA7AB;
  border-radius: 5px;
  outline: none;
  background: #F9F0DA;
  color: #9E9C9C; 
  @media (max-width: 800px) {
    width: 100%;
    height: 100px;
    font-size: larger;
    background-size: 40%;    
  }  
}
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 4.9px;
  right: -14px;
  width: 44px;
  height: 87%;
  rotate: 270deg;
  border: none;
  border-radius: 5px 5px 5px 5px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer; 
  @media (max-width: 800px) {
    top: 0;
    width: 101px;
    height: 104px;
    background-size: 60%;
  }    
`;

