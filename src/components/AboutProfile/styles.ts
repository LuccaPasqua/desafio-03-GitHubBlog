import styled from "styled-components"


export const AboutProfileContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  margin-top: -4rem;
`

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  gap:2rem;
  background:${props => props.theme['blue-700']};
  padding: 2rem;
  border-radius: 6px;
  

  img {
    width: 9.25rem;
    height: 9.25rem;
  }
`

export const AboutTheProfileContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: space-between;


  h1{
    color: ${props => props.theme['gray-50']};
  }

  p{
    color: ${props => props.theme['gray-150']};
  }
`

export const ProfileHighlightsContainer = styled.div`
  display: flex;
  gap: 2rem;
  color: ${props => props.theme['gray-300']};


  div{
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p{
      color: ${props => props.theme['gray-250']}
    }
  }
`