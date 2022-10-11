import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'

export const accentColor = '#8c8c8c'

export const HeaderProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NextNProgress
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <title>Next post app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  )
}