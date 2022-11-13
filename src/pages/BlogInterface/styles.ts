import styled from "styled-components";

export const BlogInterfaceContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  .publicacao{
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme['gray-250']};

    h2{
      font-size: 1.3rem;
    }

    
  }
  form{
      width: 100%;

    input{
      width: 100%;
      padding: 1rem;
      margin: 1rem 0 3rem 0;
      border-radius: 8px;
      background: ${props => props.theme['blue-900']};
      border: 1px solid ${props => props.theme['gray-500']};
      color: ${props => props.theme['gray-300']}
    }
  }


  .allPosts{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .post{
    background-color: ${props => props.theme['blue-600']};
    padding: 2rem;
    border-radius: 8px;

    div{
      display: grid;
      grid-template-columns: 4fr 1fr;
      gap: 1.5rem;

      h1{
        font-size: 1.3rem;
        color: ${props => props.theme['gray-50']}
      }  

      span{
        color: ${props => props.theme['gray-200']}
      }
    }



    p{
      margin-top: 2rem;
      color:${props => props.theme['gray-100']}
    }  
  }
`

