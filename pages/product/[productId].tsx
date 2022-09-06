import type { NextPage } from 'next'
import Head from 'next/head'
import {useProduct} from "medusa-react";
import {useRouter} from "next/router";
import ProductCard from "../../ui/ProductCard";

const ProductPage: NextPage = () => {
  const router = useRouter()

  const productId = router.query.productId as string | undefined

  const { product, isLoading } = useProduct(productId || '')

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
          {product ? <ProductCard product={product} /> : null}
        </h1>
      </main>
    </div>
  )
}

export default ProductPage
