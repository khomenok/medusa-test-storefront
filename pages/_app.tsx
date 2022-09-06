import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MedusaProvider} from "medusa-react";
import {QueryClient} from "react-query";

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

const queryClientProviderProps = {client: queryClient}

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env)
  return (
    <MedusaProvider
      queryClientProviderProps={queryClientProviderProps}
      baseUrl={process.env.MEDUSA_SERVER || 'http://localhost:3000'}
    >
      <div className="p-10">
        <Component {...pageProps} />
      </div>
    </MedusaProvider>
  )
}

export default MyApp
