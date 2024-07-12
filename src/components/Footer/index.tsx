import Logo from 'components/Logo'
import * as S from './styles'
import Heading from 'components/Heading'
import Link from 'next/link'

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="alternative" />
      <S.Content>
        <S.Colunm>
          <Heading color="black" size="small" $lineColor="secondary" $lineBottom>
            Contact
          </Heading>

          <a href="mailto:ghub@example.com">ghub@example.com</a>
        </S.Colunm>

        <S.Colunm>
          <Heading color="black" size="small" $lineColor="secondary" $lineBottom>
            Follow Us
          </Heading>

          <nav aria-labelledby="social media">
            <a href="#" target="_blank" rel="noreferrer, noopener">
              Instagram
            </a>

            <a href="#" target="_blank" rel="noreferrer, noopener">
              X
            </a>

            <a href="#" target="_blank" rel="noreferrer, noopener">
              YouTube
            </a>

            <a href="#" target="_blank" rel="noreferrer, noopener">
              Facebook
            </a>
          </nav>
        </S.Colunm>

        <S.Colunm>
          <Heading color="black" size="small" $lineColor="secondary" $lineBottom>
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">Home</Link>

            <Link href="/games">Store</Link>

            <Link href="/search">Search</Link>
          </nav>
        </S.Colunm>

        <S.Colunm>
          <Heading color="black" size="small" $lineColor="secondary" $lineBottom>
            Location
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">Home</Link>

            <Link href="/games">Store</Link>

            <Link href="/search">Search</Link>
          </nav>
        </S.Colunm>
      </S.Content>
      <S.Copyright>GameHub © 2024 - All rights reserved</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
