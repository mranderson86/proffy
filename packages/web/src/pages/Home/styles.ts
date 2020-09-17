import styled from "styled-components";
import { GlobalContainer } from "../../styles/global";

export const PageLandingContent = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
`;

export const Container = styled(GlobalContainer)`
  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  > svg {
    height: 10rem;
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    text-align: left;
    margin: 0;

    > h2 {
      text-align: initial;
      font-size: 3.6rem;
    }

    > svg {
      height: 100%;
    }
  }
`;

export const HeroImage = styled.div`
  > svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${props => props.theme.colors.buttonText};

    transition: background-color 0.2s;

    > svg {
      width: 4rem;
      margin-right: 2.4rem;
    }
  }

  > a:first-child {
    margin-right: 1.6rem;
    background: ${props => props.theme.colors.primaryLighter};

    &:hover {
      background: ${props => props.theme.colors.primaryLight};
    }
  }

  > a:last-child {
    background: ${props => props.theme.colors.secondary};

    &:hover {
      background: ${props => props.theme.colors.secondaryDark};
    }
  }

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;

    > a {
      font-size: 2.4rem;
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
    justify-self: end;
  }
`;
