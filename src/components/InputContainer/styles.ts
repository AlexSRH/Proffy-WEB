import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.input};
  border: 1px solid ${props => props.theme.linesInWhite};
  position: relative;
  padding: 1.8rem;

  label {
    color: ${props => props.theme.text.complements};
    left: 1.8rem;
    position: absolute;
    top: 1.8rem;
    font-size: 1.6rem;
  }

  input {
    border: none;
    background-color: transparent;
    font-size: 1.6rem;

    :invalid {
      box-shadow: none;
    }
  }

  input,
  label {
    transition: 0.3s;
  }

  :focus-within {
    input {
      transform: translateY(0.8rem);
    }

    label {
      transform: translateY(-1rem);
      font-size: 1.2rem;
    }
  }

  input:valid {
    transform: translateY(0.8rem);

    ~ label {
      transform: translateY(-1rem);
      font-size: 1.2rem;
    }
  }
`
