import { Product, ProductVariant } from '@medusajs/medusa'
import { CURRENCY_SIGNS } from '../../../utils/formatPrice'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import clsx from 'classnames'
import ProductVariantDetails from '../ProductVariantDetails'
import PersonHeightSample from '../PersonHeightSample'

type ProductOrderFormProps = {
  product: Product
  onAddToCart: () => void
}

const formatVariantPrice = (variant: ProductVariant) => {
  const currency =
    CURRENCY_SIGNS[variant.prices[0].currency_code] ||
    variant.prices[0].currency_code.toUpperCase()
  const price = variant.prices[0].amount / 100
  return `${currency}${price}`
}

const ProductOrderForm = ({ product, onAddToCart }: ProductOrderFormProps) => {
  const [variantId, setVariantId] = useState<string>(product.variants[0].id)
  const handleVariantChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setVariantId(event.target.value)
    },
    [product],
  )

  useEffect(() => {
    setVariantId(product.variants[0].id)
  }, [product])

  const chosenVariant = useMemo(
    () => product.variants.find((variant) => variant.id === variantId),
    [product, variantId],
  )

  const handleSubmitForm = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onAddToCart()
    },
    [onAddToCart],
  )

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <select
        name="variants"
        className={clsx(
          'px-4 pt-[11px] pb-[10px] border border-grey-20 text-grey-90 cursor-pointer',
          'hover:border-grey-70',
        )}
        value={variantId}
        onChange={handleVariantChange}
      >
        {product.variants.map((variant) => (
          <option key={variant.id} value={variant.id}>
            {variant.title}&nbsp;-&nbsp;
            {formatVariantPrice(variant)}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className={clsx(
          'bg-grey-90 text-[white] text-[12px] text-center leading-[2] p-2 uppercase cursor-pointer',
          'hover:bg-grey-70',
        )}
      >
        Add to cart{' '}
        {chosenVariant && `for ${formatVariantPrice(chosenVariant)}`}
      </button>
      <div className="flex gap-16 mt-4">
        {chosenVariant && <ProductVariantDetails variant={chosenVariant} />}
        {!!chosenVariant?.width && !!chosenVariant?.height && (
          <PersonHeightSample variant={chosenVariant} />
        )}
      </div>
    </form>
  )
}

export default ProductOrderForm
