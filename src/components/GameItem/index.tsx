import Image from 'next/image'
import { Download } from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameItemProps = {
  title: string
  price: string
  image: string
  downloadLink?: string
  payment?: string
}

const GameItem = ({
  title = 'test',
  price,
  image = 'img/gamecard-img.png',
  downloadLink,
  payment
}: GameItemProps) => {
  return (
    <S.Wrapper>
      <Image src={image} alt={title} width={200} height={90} />

      <S.GameData>
        <S.Title>
          {title}
          {downloadLink && (
            <S.DownloadLink onClick={() => alert(downloadLink)}>
              <Download size={24} aria-label="Download Payment Info" />
            </S.DownloadLink>
          )}
        </S.Title>

        <S.GamePrice>{price}</S.GamePrice>
      </S.GameData>

      {payment && (
        <S.PaymentData>
          <p>{payment}</p>
          <p>Purchase made in 20/07/2022 at 21:34</p>
        </S.PaymentData>
      )}
    </S.Wrapper>
  )
}

export default GameItem
