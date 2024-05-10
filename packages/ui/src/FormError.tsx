import { SizableText } from 'tamagui'

export type FormErrorProps = {
  children: React.ReactNode
}

export const FormError = ({ children }: FormErrorProps) => {
  return <SizableText color="$red10Dark">{children}</SizableText>
}

export default FormError
