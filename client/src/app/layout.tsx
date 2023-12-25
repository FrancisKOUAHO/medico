'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify'
import { NextUIProvider } from '@nextui-org/react'
import { LanguageProvider } from '@/context/LanguageContext'

import '../styles/_main.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 0,
          },
        },
      }),
  )

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Medico</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="c-layout">
          <LanguageProvider>
            <NextUIProvider>
              <QueryClientProvider client={queryClient}>
                {children}
                <ToastContainer />
                <ReactQueryDevtools initialIsOpen />
              </QueryClientProvider>
            </NextUIProvider>
          </LanguageProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
