import Heading from 'components/Heading'
import * as S from './styles'
import TextField from 'components/TextField'
import Button from 'components/Button'

const ProfileForm = () => {
  return (
    <>
      <Heading size="small" $lineBottom>
        My profile
      </Heading>

      <S.Form>
        <TextField name="name" placeholder="Name" label="Name" />

        <TextField
          type="email"
          name="email"
          placeholder="Email"
          label="E-mail"
          initialValue="teste@teste.com"
          disabled
        />

        <TextField
          type="password"
          name="password"
          placeholder="Type your password"
          label="Password"
        />

        <TextField
          type="password"
          name="new-password"
          placeholder="Type your new password"
          label="New Password"
        />

        <Button>Save</Button>
      </S.Form>
    </>
  )
}

export default ProfileForm
