import TextField from 'components/TextField'
import * as S from './styles'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'

const FormSignUp = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <TextField
          type="name"
          name="name"
          placeholder="Full Name"
          icon={<AccountCircle />}
        />

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
        <TextField
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          icon={<Lock />}
        />

        <Button $fullwidth size="large">
          Create Account
        </Button>

        <S.FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </S.FormLink>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormSignUp
