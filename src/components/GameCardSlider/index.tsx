import Slider, { SliderSettings } from 'components/Slider'
import GameCard, { GameCardProps } from 'components/GameCard'
import { ArrowBackIos, ArrowForwardIos } from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  nextArrow: <ArrowForwardIos aria-label="next game" />,
  prevArrow: <ArrowBackIos aria-label="previous game" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const GameCardSlider = ({ items, color = 'white' }: GameCardSliderProps) => {
  return (
    <S.Wrapper color={color}>
      <Slider settings={settings}>
        {items && items.map((item) => <GameCard key={item.title} {...item} />)}
      </Slider>
    </S.Wrapper>
  )
}

export default GameCardSlider
