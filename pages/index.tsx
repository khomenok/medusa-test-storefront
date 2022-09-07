import type { NextPage } from 'next'
import Head from 'next/head'
import FetchedCollectionList from '../features/FetchedCollectionList'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import FetchedProductList from '../features/FetchedProductList'

const Home: NextPage = () => {
  const router = useRouter()

  const collectionId = router.query.collectionId as string | undefined
  const onSelectCollection = useCallback(
    (collectionId?: string) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, collectionId },
      })
    },
    [router.push, router.pathname, router.query],
  )

  return (
    <>
      <Head>
        <title>Scarves Without Scars</title>
        <meta name="description" content="All type of silk scarves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FetchedCollectionList
        selectedId={collectionId}
        onSelectId={onSelectCollection}
      />
      <FetchedProductList collectionId={collectionId} />
    </>
  )
}

export default Home
