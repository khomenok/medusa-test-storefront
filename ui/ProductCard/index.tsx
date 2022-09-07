import { Product } from '@medusajs/medusa'
import Image from 'next/image'
import { useCallback, useMemo } from 'react'
import {
  getPriceDomain,
  getCurrency,
  formatPrice,
} from '../../utils/formatPrice'
import ProductOrderForm from './ProductOrderForm'

type ProductCardProps = { product: Product }

const ProductCard = ({ product }: ProductCardProps) => {
  const priceDomain = useMemo(() => getPriceDomain(product), [product])
  const currency = useMemo(() => getCurrency(product), [product])

  const handleAddToCart = useCallback(
    () =>
      window.alert(
        'Thanks for the order! We already know your address by scanning your camera.',
      ),
    [],
  )

  return (
    <section className="flex flex-col lg:flex-row gap-10">
      {product.thumbnail && (
        <div className="flex-1">
          <div className="relative pb-[100%]">
            <Image
              alt="Main product image"
              src={product.thumbnail}
              layout="fill"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center flex-1 p-4 lg:p-0 lg:pr-16">
        <h1 className="text-[30px] text-grey-90 font-semibold leading-[1.2] mb-4">
          {product.title}
        </h1>
        <h2 className="text-[14px] text-grey-90">
          {formatPrice(priceDomain, currency)}
        </h2>
        <div className="text-[12px] text-grey-70 mt-[31px] mb-[31px] whitespace-pre-line">
          {product.description}
        </div>
        <ProductOrderForm product={product} onAddToCart={handleAddToCart} />
      </div>
    </section>
  )
}

export default ProductCard
