import {Product, ProductVariant} from "@medusajs/medusa";
import {CURRENCY_SIGNS} from "../../../utils/formatPrice";
import React, {useCallback, useEffect, useMemo, useState} from "react";

type ProductOrderFormProps = {
  product: Product
  onAddToCart: () => void
}

const formatVariantPrice = (variant: ProductVariant) => {
  const currency = CURRENCY_SIGNS[variant.prices[0].currency_code] || variant.prices[0].currency_code.toUpperCase()
  const price = variant.prices[0].amount / 100
  return `${currency}${price}`
}

const ProductOrderForm = ({
  product
}: ProductOrderFormProps) => {
  const [variantId, setVariantId] = useState<string>(product.variants[0].id)
  const handleVariantChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setVariantId(event.target.value)
  }, [product])

  useEffect(() => {
    setVariantId(product.variants[0].id)
  }, [product])

  const chosenVariant = useMemo(
    () => product.variants.find(variant => variant.id === variantId),
    [product, variantId],
    )

  return (
    <form className="flex flex-col gap-4">
      <select
        name="variants"
        className="px-4 pt-[11px] pb-[10px] border border-grey-20 text-grey-90 cursor-pointer"
        value={variantId}
        onChange={handleVariantChange}
      >
        {product.variants.map(variant => (
          <option key={variant.id} value={variant.id}>
            {variant.title}&nbsp;-&nbsp;
            {formatVariantPrice(variant)}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-grey-90 text-[white] text-[12px] leading-[2] p-2 text-center uppercase cursor-pointer"
      >
        Add to cart {chosenVariant && `for ${formatVariantPrice(chosenVariant)}`}
      </button>
    </form>
  )
}

export default ProductOrderForm
