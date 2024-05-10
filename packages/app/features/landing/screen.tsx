import { H4, YStack, Button, Disclaimer, Stack, Form } from '@my/ui'
import { useRouter } from 'solito/navigation'

export function LandingScreen() {
  const router = useRouter()

  return (
    <YStack jc="space-between" ai="center" mt="$10" gap="$10">
      <H4 ta="center" maw={600} color="$gray7Light" $sm={{ maxWidth: '80%' }}>
        Seshat is a handy app to store strings and files temporarily for later retrieval or for
        sharing between devices
      </H4>
      <YStack jc="center" f={1} gap="$5" w="$20" $sm={{ width: '80%' }}>
        <Form onSubmit={() => router.push('/sync')}>
          <Form.Trigger asChild>
            <Button href="/sync" theme="blue" f={1}>
              Sync now
            </Button>
          </Form.Trigger>
        </Form>
        <Form onSubmit={() => router.push('/sync')}>
          <Form.Trigger asChild>
            <Button href="/sync" theme="purple" f={1}>
              Create new sync code
            </Button>
          </Form.Trigger>
        </Form>
      </YStack>
      <Stack maw={600} $sm={{ maxWidth: '80%' }}>
        <Disclaimer />
      </Stack>
    </YStack>
  )
}
