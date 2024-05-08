import { HomeScreen } from 'app/features/home/screen'
import Head from 'next/head'
import { YStack } from 'tamagui'

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <YStack h="100vh">
        <HomeScreen />
      </YStack>
    </>
  )
}
