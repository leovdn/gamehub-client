import TextField from 'components/TextField'
import { AccountCircle, Email, Lock } from 'styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import { Form, FormLink, FormWrapper } from 'components/Form'

const FormSignUp = () => {
  return (
    <FormWrapper>
      <Form>
        <TextField type="name" name="name" placeholder="Full Name" icon={<AccountCircle />} />

        <TextField type="email" name="email" placeholder="Email" icon={<Email />} />

        <TextField type="password" name="password" placeholder="Password" icon={<Lock />} />
        <TextField
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          icon={<Lock />}
        />

        <Button $fullwidth size="large">
          Create Account
        </Button>

        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </Form>
    </FormWrapper>
  )
}

export default FormSignUp
