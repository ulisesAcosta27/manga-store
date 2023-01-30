import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

interface Props {
  children: ReactNode
  name: string
}

export const AuthLayout:FC<Props> = ({ children, name }) => {
  return (
    <>
      <Head>
        <title>{ name }</title>
      </Head>
      <div className="flex w-full h-[100vh] items-center justify-center flex-col">
        { children }
      </div>
    </>
  );
}
