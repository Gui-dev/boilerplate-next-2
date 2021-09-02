import { Container, Logo, Title, Description, Illustration } from './style'

// import {} from ''

export const Main = () => {
  return (
    <Container>
      <Logo src="/images/logo.svg" alt="Imagem de um átomo e React avançado do lado" title="React Avançado"/>
      <Title>React Avançado</Title>
      <Description>
        Typescript, ReactJS, NextJS e Styled Components
      </Description>
      <Illustration src="/images/hero-illustration.svg" alt="Um desenvolvedor de frente para a tela com código"/>
    </Container>
  )
}
