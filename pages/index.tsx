import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Scarves Without Scars</title>
        <meta name="description" content="All type of silk scarves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">
          <a href="/">Scarves Without Scars</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
