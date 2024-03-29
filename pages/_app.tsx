import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MedusaProvider } from 'medusa-react'
import { QueryClient } from 'react-query'
import BaseLayout from '../ui/BaseLayout'

// Your react-query's query client config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
      retry: 1,
    },
  },
})

const queryClientProviderProps = { client: queryClient }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={queryClientProviderProps}
      baseUrl={'/'}
    >
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </MedusaProvider>
  )
}

export default MyApp
