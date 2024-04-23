import { Settings } from 'react-slick'
import Slider, { SliderProps } from '.'
import { Meta, StoryFn } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Slider',
  component: Slider,
  args: {}
} as Meta

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid black;
  color: white;
  text-align: center;
`

export const Horizontal: StoryFn<SliderProps> = () => (
  <Slider settings={horizontalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: true,
  slidesToShow: 1
}

export const Vertical: StoryFn<SliderProps> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
