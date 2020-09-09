import styled from 'styled-components'

export const Container = styled.label`
  color: ${props => props.theme.text.label};
  display: block;
  position: relative;
  padding-left: 3.5rem;
  font-size: 1.4rem;

  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .check-mark {
    position: absolute;
    border-radius: 0.8rem;
    border: 1px solid ${props => props.theme.linesInWhite};
    top: 0;
    left: 0;
    height: 2.4rem;
    width: 2.4rem;
    background-color: ${props => props.theme.white};
    transition: 0.2s;
  }

  input:checked ~ .check-mark {
    background-color: ${props => props.theme.secondary.standard};
  }

  .check-mark:after {
    content: '';
    position: absolute;
    display: none;
    transition: 0.2s;
  }

  input:checked ~ .check-mark:after {
    display: block;
  }

  .check-mark:after {
    left: 0.7rem;
    top: 0.3rem;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
