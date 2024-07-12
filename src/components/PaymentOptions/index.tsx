import Heading from 'components/Heading'
import Image from 'next/image'
import Button from 'components/Button'
import { Add, AddShoppingCart } from 'styled-icons/material-outlined'
import * as S from './styles'
import RadioInput from 'components/RadioInput'
import { useState } from 'react'

export type PaymentOptionsProps = {
  cards?: PaymentCardProps[]
  handlePayment: () => void
}

export type PaymentCardProps = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading size="small" $lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <Image src="/img/master.svg" alt={card.flag} width={40} height={25} />
                {card.number}
              </S.CardInfo>

              <RadioInput
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCreditCard>
            <Add size={24} />
            Add New Credit Card
          </S.AddCreditCard>
        </S.CardsList>
      </S.Body>

      <S.Footer>
        <Button as="a" href="/store" minimal>
          Continue Shopping
        </Button>

        <Button icon={<AddShoppingCart />} disabled={!checked} onClick={handlePayment}>
          Buy Now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
