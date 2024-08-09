import Image from 'next/image'
import * as S from './styles'
import { AddShoppingCart, Favorite, FavoriteBorder } from 'styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon from 'components/Ribbon'
import Link from 'next/link'

export type GameCardProps = {
  slug: string
  title: string
  developer: string | undefined
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFavorite?: () => void
  ribbon?: string
  ribbonColor?: 'primary' | 'secondary'
  ribbonSize?: 'normal' | 'small'
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFavorite,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          My Ribbon
        </Ribbon>
      )}

      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <Image src={img} alt={title} width={300} height={140} />
        </S.ImageBox>
      </Link>

      <S.Content>
        <S.Info>
          <Link href={`game/${slug}`} passHref>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </Link>
        </S.Info>

        <S.FavButton role="button" onClick={onFavorite}>
          {favorite ? (
            <Favorite aria-label="Remove from wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to wishlist" />
          )}
        </S.FavButton>

        <S.BuyBox>
          {!!promotionalPrice && <S.Price $isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
