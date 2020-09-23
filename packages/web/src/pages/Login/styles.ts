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

  background: ${props => props.theme.colors.background};
`;

export const ContentSection = styled(GlobalContainer)`
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
`;
