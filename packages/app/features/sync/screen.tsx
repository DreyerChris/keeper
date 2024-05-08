import { H4, YStack, Button, Disclaimer, Stack, Input } from '@my/ui'
import { useState } from 'react'
import { useRouter } from 'solito/navigation'

export function SyncScreen() {
  const [syncCode, setSyncCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const submit = (): void => {
    if (syncCode === 'pink-elephant-123') {
      router.push(`/home`)
    } else {
      setError('Oops! The entered sync code could not be found')
    }
  }

  return (
    <YStack jc="space-between" ai="center" mt="$10" gap="$10">
      <H4 ta="center" maw={600} color="$gray7Light" $sm={{ maxWidth: '80%' }}>
        Enter your sync code to retrieve your stored strings and files on this device
      </H4>
      <YStack jc="center" ai="center" f={1} gap="$5" w="$20" $sm={{ maxWidth: '80%' }}>
        <Input
          flex={1}
          size="$5"
          placeholder="Enter sync code"
          value={syncCode}
          onChange={(e) => setSyncCode(e.nativeEvent.text)}
        />
        <Button theme="purple" onPress={submit}>
          Continue
        </Button>
      </YStack>
      <Stack maw={600} $sm={{ maxWidth: '80%' }}>
        <Disclaimer />
      </Stack>
    </YStack>
  )
}
