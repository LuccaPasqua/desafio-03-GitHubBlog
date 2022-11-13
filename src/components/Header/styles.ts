import styled from "styled-components";
import Cover from '../../assets/Cover.png'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18rem;
  /* background: ${props => props.theme['blue-700']}; */
  background-image: url(${Cover});

  display: flex;
  justify-content: space-between;

  .logo{
    height: 6rem;
    margin-top: 2rem;
  }
  
  .effectLeft{
    width: 22rem;
  }

  .effectRight{
    width: 22rem;

  }

  

`