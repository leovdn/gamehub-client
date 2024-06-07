import Heading from 'components/Heading'
import * as S from './styles'
import Button from 'components/Button'
import { AddShoppingCart, Favorite } from 'styled-icons/material-outlined'
import Ribbon from 'components/Ribbon'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading $lineBottom $lineColor="secondary">
        {title}
      </Heading>
      <Ribbon color="secondary" size="small">
        {price}
      </Ribbon>
      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />}>Add to cart</Button>
        <Button icon={<Favorite />}>Add to Wishlist</Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  )
}

export default GameInfo
