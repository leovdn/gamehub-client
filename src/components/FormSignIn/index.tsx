import TextField from 'components/TextField'
import * as S from './styles'
import { Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import { Form, FormLink, FormWrapper } from 'components/Form'

const FormSignIn = () => {
  return (
    <FormWrapper>
      <Form>
        <TextField type="email" name="email" placeholder="Email" icon={<Email />} />
        <TextField type="password" name="password" placeholder="Password" icon={<Lock />} />

        <S.ForgotPassword>
          <Link href="/forgot-password">Forgot your password?</Link>
        </S.ForgotPassword>

        <Button $fullwidth size="large">
          Sign in
        </Button>

        <FormLink>
          Don’t have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </Form>
    </FormWrapper>
  )
}

export default FormSignIn
