import Banner, { BannerProps } from 'components/Banner'
import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false
      }
    }
  ]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items && items.map((item) => <Banner key={item.title} {...item} />)}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
