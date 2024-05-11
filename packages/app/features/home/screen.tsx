import { Disclaimer, Input, Label, Stack, TextArea, YStack, Badge, Text } from '@my/ui'
import { useState } from 'react'

export function HomeScreen() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [longText1, setLongText1] = useState('')

  return (
    <YStack ai="center" gap="$10">
      <Badge type="success">TestBadge</Badge>
      <YStack gap="$3" width="80%">
        <YStack>
          <Label>Text 1</Label>
          <Input value={text1} onChange={(e) => setText1(e.nativeEvent.text)} />
        </YStack>
        <YStack>
          <Label>Text 2</Label>
          <Input value={text2} onChange={(e) => setText2(e.nativeEvent.text)} />
        </YStack>
        <YStack>
          <Label>Text 3</Label>
          <Input value={text3} onChange={(e) => setText3(e.nativeEvent.text)} />
        </YStack>
        <YStack>
          <Label>Long text</Label>
          <TextArea value={longText1} onChange={(e) => setLongText1(e.nativeEvent.text)} />
        </YStack>
      </YStack>
      <Stack maw={600} $sm={{ maxWidth: '80%' }}>
        <Disclaimer />
      </Stack>
    </YStack>
  )
}
