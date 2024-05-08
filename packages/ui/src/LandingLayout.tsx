import { Stack, YStack, Image, XStack, useMedia } from 'tamagui'

export type LandingLayoutProps = {
  children: React.ReactNode
}

export const LandingLayout = ({ children }: LandingLayoutProps) => {
  const media = useMedia()

  return (
    <XStack jc="center" ai="center" f={1}>
      <YStack
        style={{ backgroundColor: 'rgba(9,9,9)' }}
        py="$10"
        fg={1}
        $sm={{ width: '95%', mx: '$5' }}
        maw={1200}
        br="$10"
      >
        <Stack pos="relative" mx="auto">
          <Image
            source={{
              uri: '/seshat.svg',
              height: media.sm ? 100 : 200,
              width: media.sm ? 150 : 300,
            }}
            resizeMode="contain"
          />
        </Stack>
        {children}
      </YStack>
    </XStack>
  )
}

export default LandingLayout
