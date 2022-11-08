import { useState } from 'react'
import { Login } from '../../components/Login/Login';
import { Register } from '../../components/Register/Register';
import { Container, Content, Paragraph } from './Styles'

export const HomePage = () => {

  const [hasLogin, setHasLogin] = useState(true)

  return (
    <Container>
      <Content>
        <h1>☞ Bem vindo(a) :)</h1>
        <h2>Um jeito fácil de comprar sem ir ao mercado.</h2>
        <h3>Preencha seus dados abaixo e vamos às compras! 🛒</h3>
      </Content>
      {hasLogin ? <Login /> : <Register />}
      {
        hasLogin 
        ? <Paragraph>Não tem conta?<span onClick={() => setHasLogin(!hasLogin)}>Crie uma!</span></Paragraph>
        : <Paragraph>Se já possui uma conta: <span onClick={() => setHasLogin(!hasLogin)}>Logar</span></Paragraph>
      }
    </Container>
  )
}
