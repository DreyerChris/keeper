'use client'
import Link from 'next/link'
import { Button, ThemeName } from 'tamagui'

export type LinkButtonProps = {
  href: string
  children: React.ReactNode
  theme: ThemeName
}

export const LinkButton = ({ href, children, theme }: LinkButtonProps) => {
  return (
    <Link href={href} style={{ textDecoration: 'none', width: '100%', display: 'flex' }}>
      <Button theme={theme} f={1}>
        {children}
      </Button>
    </Link>
  )
}
