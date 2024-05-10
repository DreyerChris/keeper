import { YStack, Input as TamaguiInput, InputProps } from 'tamagui'
import FormError from './FormError'

export const Input = (props: InputProps & { error: string }) => {
  return (
    <YStack gap="$3" width="100%">
      <TamaguiInput {...props} />
      {props.error && <FormError>{props.error}</FormError>}
    </YStack>
  )
}

export default Input
