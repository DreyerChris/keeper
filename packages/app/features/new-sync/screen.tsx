import { H4, YStack, Button, Disclaimer, Stack, Input, Badge } from '@my/ui'
import { useState } from 'react'
import { useRouter } from 'solito/navigation'

export function NewSyncScreen() {
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
      <H4 ta="center" maw={600} color="$gray7Light" $sm={{ maxWidth: '90%' }}>
        Your new sync code is:
      </H4>
      <Badge type='success'>pink-elephant-123</Badge>
      <H4 ta="center" maw={600} color="$gray7Light" $sm={{ maxWidth: '90%' }}>
        Enter a password for your newly generated sync code, you will need it to authenticate yourself later
      </H4>
      <YStack jc="center" ai="center" f={1} gap="$5" w="$20" $sm={{ width: '80%' }}>
        <Input
          flex={1}
          secureTextEntry={true}
          size="$5"
          placeholder="Enter sync code password"
          value={syncCode}
          onChange={(e) => setSyncCode(e.nativeEvent.text)}
          error={error}
        />
        <Button theme="purple" onPress={submit}>
          Continue
        </Button>
      </YStack>
      <Stack maw={600} $sm={{ maxWidth: '90%' }}>
        <Disclaimer />
      </Stack>
    </YStack>
  )
}
