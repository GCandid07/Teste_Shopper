import { useState } from 'react'
import { Login } from '../../components/Login/Login';
import { Register } from '../../components/Register/Register';
import { Container, Content, Paragraph } from './Styles'

export const HomePage = () => {

  const [isLogin, setIsLogin] = useState(false)

  return (
    <Container>
      <Content>
        <h1>☞ Bem vindo(a) :)</h1>
        <h2>Um jeito fácil de comprar sem ir ao mercado.</h2>
        <h3>Preencha seus dados abaixo e vamos às compras! 🛒</h3>
      </Content>
      {isLogin ? <Login /> : <Register />}
      {
        isLogin 
        ? <Paragraph>Se ainda não possui uma conta: <span onClick={() => setIsLogin(!isLogin)}>Cadastrar</span></Paragraph>
        : <Paragraph>Se já possui uma conta: <span onClick={() => setIsLogin(!isLogin)}>Logar</span></Paragraph>
      }
    </Container>
  )
}
