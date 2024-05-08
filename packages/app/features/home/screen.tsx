import { Disclaimer, Input, Label, Stack, YStack } from '@my/ui'
import { useState } from 'react'

export function HomeScreen() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')

  return (
    <YStack ai="center" gap="$10">
      <YStack gap="$3" mt="$8" width="80%">
        <YStack>
          <Label>Text 1</Label>
          <Input value={text1} onChange={(e) => setText1(e.nativeEvent.text)} />
        </YStack>
        <YStack>
          <Label>Text 1</Label>
          <Input value={text2} onChange={(e) => setText2(e.nativeEvent.text)} />
        </YStack>
        <YStack>
          <Label>Text 1</Label>
          <Input value={text3} onChange={(e) => setText3(e.nativeEvent.text)} />
        </YStack>
        <YStack>
          <Label>Text 1</Label>
          <Input value={text4} onChange={(e) => setText4(e.nativeEvent.text)} />
        </YStack>
      </YStack>
      <Stack maw={600} $sm={{ maxWidth: '80%' }}>
        <Disclaimer />
      </Stack>
    </YStack>
  )
}
