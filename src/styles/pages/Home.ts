import styled from 'styled-components'

import background from '../../assets/background.png'
import backgroundLarge from '../../assets/background-large.png'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  @media (min-width: 1100px) {
    & {
      flex-direction: row;
    }
  }
`

export const LogoContainer = styled.div`
  align-items: center;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.primary.standard};
  background-size: 35rem;
  color: ${props => props.theme.text.inPurple.standard};
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: center;
  padding: 0 2rem;
  width: 100%;

  svg {
    width: 25rem;
  }

  h2 {
    font-size: 2rem;
    width: 24rem;
  }

  @media (min-width: 1100px) {
    background-image: url(${backgroundLarge});
    background-size: 80%;
    height: 100%;
    width: 50%;
  }
`

export const FormContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  margin: 1rem;

  @media (min-width: 1100px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }
`

export const HeaderForm = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  h3 {
    color: ${props => props.theme.text.title};
    font-size: 2.4rem;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: ${props => props.theme.primary.standard};
  }
`

export const InputGroup = styled.div`
  border-radius: 1.6rem;
  padding: 0px;
  overflow: hidden;
`

export const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.4rem 0;

  a {
    color: ${props => props.theme.text.label};
    font-size: 1.4rem;

    text-decoration: none;
  }
`

export const FormFooter = styled.div`
  display: none;
  font-size: 1.6rem;
  justify-content: space-around;
  width: 60%;

  a {
    color: ${props => props.theme.primary.standard};
    font-weight: bold;
  }

  @media (min-width: 1100px) {
    & {
      display: flex;
    }
  }
`
