import type { NextPage } from 'next'
import Head from 'next/head'
import {useProducts} from "medusa-react";
import FetchedCollectionList from "../features/FetchedCollectionList";
import {useRouter} from "next/router";
import {useCallback} from "react";
import FetchedProductList from "../features/FetchedProductList";

const Home: NextPage = () => {
  const router = useRouter()

  const collectionId = router.query.collectionId as string | undefined
  const onSelectCollection = useCallback((collectionId: string) => {
    router.push({
      pathname: router.pathname,
      query: {...router.query, collectionId},
    })
  }, [router.push, router.pathname, router.query])

  const { products, isLoading } = useProducts()
  console.log(products)

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
        <FetchedCollectionList selectedId={collectionId} onSelectId={onSelectCollection} />
        <FetchedProductList collectionId={collectionId} />
      </main>
    </div>
  )
}

export default Home
