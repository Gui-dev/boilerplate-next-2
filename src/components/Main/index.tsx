import { Container, Logo, Title, Description, Illustration } from './style'

export const Main = ({ title = 'React Avançado' }) => {
  return (
    <Container>
      <Logo src="/images/logo.svg" alt="Imagem de um átomo e React avançado do lado" title="React Avançado"/>
      <Title>{ title }</Title>
      <Description>
        Typescript, ReactJS, NextJS, Styled Components,<br />
        Jest, Testing Library React, Storybook, Husky
      </Description>
      <Illustration src="/images/hero-illustration.svg" alt="Um desenvolvedor de frente para a tela com código"/>
    </Container>
  )
}
