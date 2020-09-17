import React from "react";
import Link from "next/link";

import {
  Container,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections
} from "./styles";

import LogoSVG from "../../assets/images/logo.svg";
import LandingSVG from "../../assets/images/landing.svg";

import StudyIcon from "../../assets/images/icons/study.svg";
import GiveClassesIcon from "../../assets/images/icons/give-classes.svg";
import PurpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

const Home = (): JSX.Element => {
  return (
    <PageLandingContent>
      <Container>
        <LogoContainer>
          <LogoSVG />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage>
          <LandingSVG />
        </HeroImage>

        <ButtonsContainer>
          <Link href="/study">
            <a>
              <StudyIcon />
              Estudar
            </a>
          </Link>

          <Link href="/give-classes">
            <a>
              <GiveClassesIcon />
              Dar Aulas
            </a>
          </Link>
        </ButtonsContainer>

        <TotalConnections>
          Total de 0 conexões já realizadas <PurpleHeartIcon />
        </TotalConnections>
      </Container>
    </PageLandingContent>
  );
};

export { Home };
