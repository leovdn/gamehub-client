import Image from 'next/image'
import LogoImg from '../../../public/img/logo-outline.svg'
import * as S from './styles'

const Logo = () => {
  return (
    <S.Wrapper>
      <Image
        src={LogoImg}
        alt="Logo with a joystick writen Gamehub on the right"
      />
    </S.Wrapper>
  )
}

export default Logo
