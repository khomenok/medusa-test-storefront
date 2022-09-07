import { ProductVariant } from '@medusajs/medusa'
import React, { useMemo } from 'react'
import Image from 'next/image'

type ProductVariantDetailsProps = {
  variant: ProductVariant
}

const ProductVariantDetails = ({ variant }: ProductVariantDetailsProps) => {
  const carpetStyle = useMemo(() => {
    const width = (100 * variant.width) / 170
    const height = (100 * variant.height) / 170

    return { width, height }
  }, [variant])

  return (
    <div className="flex text-midnight">
      <div className="flex flex-col items-center">
        <div className="w-[60px] h-[100px] relative">
          <Image alt="Person icon" src="/person-icon.svg" layout="fill" />
        </div>
        <div className="text-[12px]">170cm</div>
      </div>
      <div className="mt-[6px]">
        <div
          className="bg-midnight transition duration-75 ease-in"
          style={carpetStyle}
        />
        <div className="text-[12px] mt-1">
          {variant.width}x{variant.height}cm
        </div>
      </div>
    </div>
  )
}

export default ProductVariantDetails
