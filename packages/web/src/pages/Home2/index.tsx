import React from "react";
import Link from "next/link";

import {
  Section,
  ContentSection,
  Banner,
  BannerSection,
  PageLandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
  Welcome
} from "./styles";

import LogoSVG from "../../assets/images/logo.svg";
import LandingSVG from "../../assets/images/landing.svg";

import StudyIcon from "../../assets/images/icons/study.svg";
import GiveClassesIcon from "../../assets/images/icons/give-classes.svg";
import PurpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import { Header } from "../../components/Header";
import { Avatar } from "../../components/Avatar";
import { SignOut } from "../../components/SignOut";

const Home = (): JSX.Element => {
  return (
    <PageLandingContent>
      <Header>
        <Avatar name="Anderson Gomes" />
        <SignOut />
      </Header>

      <Banner>
        <BannerSection>
          <LogoContainer>
            <LogoSVG />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>

          <HeroImage>
            <LandingSVG />
          </HeroImage>
        </BannerSection>
      </Banner>

      <Section>
        <ContentSection>
          <Welcome>
            <span>Seja bem-vindo.</span>
            <span>O que deseja fazer?</span>
          </Welcome>

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
        </ContentSection>
      </Section>
    </PageLandingContent>
  );
};

export { Home };
