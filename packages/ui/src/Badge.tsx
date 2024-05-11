import { XStack, Text} from 'tamagui'

export type BadgeProps = {
  type: 'success'
  children: React.ReactNode
}

export const Badge = ({ type, children }: BadgeProps) => {
  let colorProps = {}
  switch (type) {
    case 'success': {
      colorProps = {
        color: '$green10Dark',
        backgroundColor: '$green2Dark',
      }
    }
  }

  return (
    <XStack {...colorProps} px="$5" py="$2" br="$3">
      <Text {...colorProps}>{children}</Text>
    </XStack>
  )
}

export default Badge
