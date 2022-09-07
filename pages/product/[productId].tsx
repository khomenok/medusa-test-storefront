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
    <>
      <Head>
        <title>{product ? `${product.title} - Scarves Without Scars` : 'Scarves Without Scars'}</title>
        <meta name="description" content="All type of silk scarves" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-2">
        {product ? <ProductCard product={product} /> : null}
      </div>
    </>
  )
}

export default ProductPage
