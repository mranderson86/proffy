import styled from "styled-components";

// import SignOutIcon from "../../assets/images/icons/sign-out.svg";

export const SignOutStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.primaryDark};

  border-radius: 1rem;

  width: 40px;
  height: 40px;

  > svg {
    width: 25px;
    height: 25px;
  }

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primaryDarker};
  }
`;
