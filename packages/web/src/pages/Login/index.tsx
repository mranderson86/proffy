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
import BackgroundSVG from "../../assets/images/success-background.svg";

import { Title } from "../../components/Title";
import { Label } from "../../components/Label";
import { InputField } from "../../components/InputField";
import { PasswordField } from "../../components/PasswordField";

const Login = (): JSX.Element => {
  return (
    <LoginPageContent>
      <Banner>
        <BannerSection>
          <BackgroundSVG />

          <LogoContainer>
            <LogoSVG />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>
        </BannerSection>
      </Banner>

      <Section>
        <ContentSection>
          <div>
            <Title>Fazer Login</Title>
            <Label>Criar uma conta</Label>
          </div>

          <fieldset>
            <InputField name="email" label="E-mail" maxLength={50} />
            {/* <InputField name="senha" label="Senha" /> */}

            <PasswordField name="senha" label="Senha" maxLength={50} />
          </fieldset>
        </ContentSection>
      </Section>
    </LoginPageContent>
  );
};

export { Login };
