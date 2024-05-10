import { Stack } from 'tamagui'

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
        backgroundColor: '$green4Dark',
      }
    }
  }

  return (
    <Stack {...colorProps} px="$5" py="$1" br="$3">
      {children}
    </Stack>
  )
}

export default Badge
