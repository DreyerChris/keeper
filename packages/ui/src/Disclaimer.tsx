import { Paragraph } from 'tamagui'

export const Disclaimer = (props) => {
  return (
    <Paragraph mx="auto" ta="center" color="$gray10Light">
      Seshat is not meant to be a secure storage, do not use Seshat without keeping in mind that
      data is not encrypted and can be accessed by malicious users with enough effort
    </Paragraph>
  )
}
