import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 6.7rem;

  background: ${props => props.theme.colors.inputBackground};
  border: 0.2rem solid ${props => props.theme.colors.lineWhite};
  border-radius: 0.8rem 0.8rem 0 0;

  outline: 0;
  padding: 2.5rem 8rem 0 2rem;

  line-height: 2.5rem;
  color: ${props => props.theme.colors.textBase};
  font: 400 1.5rem Poppins;
`;

export const Label = styled.label`
  font: 400 1.5rem Poppins;

  line-height: 2.5rem;
  color: ${props => props.theme.colors.textComplement};

  left: 2.5rem;
  top: 2.1rem;

  position: absolute;
  transition: 0.3s ease all;

  ${Input}:focus ~ &, ${Input}:valid ~ & {
    top: 1rem;
    line-height: 2rem;

    color: ${props => props.theme.colors.textInput};
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  > div > svg {
    width: 2.5rem;
    height: 2.5rem;

    position: absolute;

    top: 2rem;
    right: 2rem;

    cursor: pointer;

    > path {
      fill: ${props => props.theme.colors.textComplement};

      &:hover {
        fill: ${props => props.theme.colors.primary};
      }

      transition: fill 0.3s;
    }
  }

  &:focus-within::after {
    width: 0.2rem;
    height: calc(100% - 2rem);
    content: "";
    background: ${props => props.theme.colors.primaryLight};
    position: absolute;
    left: 0;
    top: 1rem;
    bottom: 1rem;
  }
`;
