import Image from 'next/image'
import { Download } from 'styled-icons/boxicons-solid'
import * as S from './styles'

export type PaymentInfoProps = {
  cardNumber: string
  cardFlag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  title: string
  price: string
  image: string
  downloadLink?: string
  payment?: PaymentInfoProps
}

const GameItem = ({ title, price, image, downloadLink, payment }: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <Image src={image} alt={title} width={300} height={140} />
        </S.ImageBox>
        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink href={downloadLink} target="_blank" aria-label={`Get ${title} here`}>
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>

      {!!payment && (
        <S.PaymentContent>
          <p>Purchase made in {payment.purchaseDate}</p>

          <S.CardInfo>
            <span>{payment.cardNumber}</span>
            <Image src={payment.img} alt={payment.cardFlag} width={30} height={30} />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}

export default GameItem
