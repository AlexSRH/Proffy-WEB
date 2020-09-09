import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import InputContainer from '../components/InputContainer'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

import ProffyLogo from '../assets/proffy-logo.svg'
import PurpleHead from '../assets/purple-heart.svg'

import {
  Container,
  LogoContainer,
  FormContainer,
  HeaderForm,
  InputGroup,
  InputFooter,
  FormFooter
} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Proffy | Login</title>
      </Head>

      <LogoContainer>
        <ProffyLogo />
        <h2>Sua plataforma de estudos online.</h2>
      </LogoContainer>

      <FormContainer>
        <div />
        <form>
          <HeaderForm>
            <h3>Fazer Login</h3>
            <Link href="/">Criar uma conta</Link>
          </HeaderForm>
          <InputGroup>
            <InputContainer id="email" label="E-mail" />
            <InputContainer id="password" type="password" label="Senha" />
          </InputGroup>
          <InputFooter>
            <Checkbox id="remember" label="Lembrar-me" />
            <Link href="/">Esqueci minha senha</Link>
          </InputFooter>
          <Button>Entrar</Button>
        </form>

        <FormFooter>
          <div>
            Não tem uma conta? <br />
            <Link href="/">Cadastre-se</Link>
          </div>

          <span>
            É de graça <PurpleHead />
          </span>
        </FormFooter>
      </FormContainer>
    </Container>
  )
}

export default Home
