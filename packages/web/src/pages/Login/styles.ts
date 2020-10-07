import styled from "styled-components";

import { GlobalContainer } from "../../styles/global";

export const LoginPageContent = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
`;

export const Banner = styled.section`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 60vh;
  min-height: 400px;

  @media (min-width: 1100px) {
    min-height: 400px;
  }
`;

export const BannerSection = styled(GlobalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 500px;

  position: relative;

  > svg {
    width: 100%;
    height: 100%;

    max-width: 500px;
    max-height: 400px;

    position: absolute;
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: flex;
    justify-content: space-between;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;

  height: 100%;

  padding-top: 3rem;

  background: ${props => props.theme.colors.background};
`;

export const ContentSection = styled(GlobalContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 500px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 2rem;
  }

  > fieldset {
    display: flex;

    width: 100%;
    border: none;

    margin-bottom: 2rem;

    > div + div > input {
      border-radius: 0 0 0.8rem 0.8rem;
    }
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas: "welcome total buttons buttons";
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  z-index: 2;
  /* margin-bottom: 3.2rem; */

  > svg {
    height: 10rem;
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;
