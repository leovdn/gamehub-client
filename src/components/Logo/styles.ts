import styled from 'styled-components'
import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => `
    color: ${theme.colors[color!]};
  `}
`
