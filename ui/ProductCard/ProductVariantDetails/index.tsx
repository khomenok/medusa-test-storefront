import {ProductVariant} from "@medusajs/medusa";
import React, {useMemo} from "react";

const DETAIL_KEYS = [
  {key: 'material', title: 'Material'},
  {key: 'origin_country', title: 'Origin Country'},
]

type ProductVariantDetailsProps = {
  variant: ProductVariant
}

const ProductVariantDetails = ({
  variant
}: ProductVariantDetailsProps) => {
  const detailKeys = useMemo(
    /* @ts-ignore todo: */
    () => DETAIL_KEYS.filter(key => variant.hasOwnProperty(key.key) && variant[key.key]),
    [variant],
  );

  if (!detailKeys.length) {
    return null
  }

  return (
    <div className="mt-4 text-[12px] leading-[20px] text-black">
      <h3 className="font-semibold mb-2">Product details</h3>
      <ul>
        {detailKeys.map(({key, title}) => key in variant && (
          <li className="mb-1" key={key}>
            <div className="font-semibold">
              {title}
            </div>
            {/* @ts-ignore todo: */}
            <div>{variant[key]}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductVariantDetails
