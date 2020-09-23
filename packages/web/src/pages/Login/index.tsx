import React from "react";

import {
  LoginPageContent,
  LogoContainer,
  Banner,
  BannerSection,
  Section,
  ContentSection
} from "./styles";

import LogoSVG from "../../assets/images/logo.svg";
import { Title } from "../../components/Title";
import { Label } from "../../components/Label";

const Login = (): JSX.Element => {
  return (
    <LoginPageContent>
      <Banner>
        <BannerSection>
          <LogoContainer>
            <LogoSVG />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>
        </BannerSection>
      </Banner>

      <Section>
        <ContentSection>
          <Title>Fazer Login</Title>
          <Label>Criar uma conta</Label>
        </ContentSection>
      </Section>
    </LoginPageContent>
  );
};

export { Login };
