import Button from 'components/Button'
import TextField from 'components/TextField'
import Link from 'next/link'
import { PersonOutline } from 'styled-icons/material'
import { Email, Lock } from 'styled-icons/material-outlined'
import Auth from 'templates/Auth'
import { LoginForm } from 'templates/Auth/styles'

export default function SignUp() {
  return (
    <Auth title="Create Account">
      <LoginForm>
        <TextField
          type="name"
          name="name"
          placeholder="Full Name"
          icon={<PersonOutline />}
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

        <span>
          Don’t have an account? <Link href="/sign-in">Sign In</Link>
        </span>
      </LoginForm>
    </Auth>
  )
}
