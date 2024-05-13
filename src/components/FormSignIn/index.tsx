import TextField from 'components/TextField'
import * as S from './styles'
import { Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'

const FormSignIn = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          icon={<Email />}
        />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          icon={<Lock />}
        />

        <S.ForgotPassword>
          <Link href="/forgot-password">Forgot your password?</Link>
        </S.ForgotPassword>

        <Button $fullwidth size="large">
          Sign in
        </Button>

        <S.FormLink>
          Don’t have an account? <Link href="/sign-up">Sign up</Link>
        </S.FormLink>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormSignIn
