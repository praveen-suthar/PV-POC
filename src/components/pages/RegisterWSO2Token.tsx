import {
  useToast,
  Button,
  Input,
  Section,
  Label,
} from '@jeraoss/jera-design-ui'
import React from 'react'
import { useNavigation } from 'react-navi'
import { useWSO2Auth } from '../../context/WSO2AuthContext'

const useInputText = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue)

  return {
    value,
    setValue,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  }
}

const useAccessTokenFormState = () => {
  const { accessToken, setAccessToken } = useWSO2Auth()
  const { value, setValue, onChange } = useInputText(accessToken || '')
  const { showToast } = useToast()
  const { navigate } = useNavigation()

  const onClickHandler = () => {
    ;(async () => {
      setAccessToken(value)
      navigate('/apps/todo/list')
      showToast({
        position: 'bottom-right',
        style: 'success',
        message: 'Token successfully registered!',
      })
    })()
  }

  React.useEffect(() => {
    setValue(accessToken || '')
  }, [accessToken])

  return {
    value,
    onChange,
    onClickHandler,
  }
}

const RegisterWSO2Token: React.FC = () => {
  const { value, onChange, onClickHandler } = useAccessTokenFormState()

  return (
    <>
      <Section>
        <Label>
          Access Token:
          <Input.TextArea {...{ value, onChange }} />
        </Label>
        <Button.Small onClick={onClickHandler} classString="uk-align-right">
          Register
        </Button.Small>
      </Section>
    </>
  )
}

export { RegisterWSO2Token }
