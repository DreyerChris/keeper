import { H4, YStack, LinkButton, Disclaimer, Stack } from '@my/ui'

export function LandingScreen() {
  return (
    <YStack jc="space-between" ai="center" mt="$10" gap="$10">
      <H4 ta="center" maw={600} color="$gray7Light" $sm={{ maxWidth: '80%' }}>
        Seshat is a handy app to store strings and files temporarily for later retrieval or for
        sharing between devices
      </H4>
      <YStack jc="center" f={1} gap="$5" w="$20" $sm={{ width: '80%' }}>
        <LinkButton theme="blue" href="/sync">
          Sync now
        </LinkButton>
        <LinkButton theme="purple" href="/sync">
          Create new sync code
        </LinkButton>
      </YStack>
      <Stack maw={600} $sm={{ maxWidth: '80%' }}>
        <Disclaimer />
      </Stack>
    </YStack>
  )
}
