import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { Email, Lock } from 'styled-icons/material-outlined'
import Auth from 'templates/Auth'
import { LoginForm } from 'templates/Auth/styles'

export default function SignIn() {
  return (
    <Auth title="Sign in">
      <LoginForm>
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
        <span>
          <Link href="/forgot-password">Forgot your password?</Link>
        </span>

        <Button $fullwidth size="large">
          Sign in
        </Button>

        <span>
          Don’t have an account? <Link href="/sign-up">Sign up</Link>
        </span>
      </LoginForm>
    </Auth>
  )
}
