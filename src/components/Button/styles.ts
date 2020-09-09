import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${props => props.theme.secondary.standard};
  border: none;
  color: ${props => props.theme.white};
  font-weight: bold;
  border-radius: 0.8rem;
  padding: 1.6rem;
  width: 100%;

  :hover {
    background-color: ${props => props.theme.secondary.light};
  }
`
