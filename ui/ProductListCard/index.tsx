import {Product} from "@medusajs/medusa";
import Link from "next/link";
import Image from "next/image";
import {useMemo} from "react";

type ProductListCardProps = {product: Product}

const CURRENCY_SIGNS: Record<string, string | undefined> = {
  'eur': 'Є'
}

const ProductListCard = (props: ProductListCardProps) => {
  const prices = useMemo(() =>
    props.product.variants.map(variant => variant.prices.map(price => price.amount / 100)).flat(),
    [props.product]
  )
  console.log(prices)
  const priceDomain = useMemo(() => {
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    return [min, max]
  }, [prices])

  // todo: for now, frontend supports only one currency
  const currency = props.product.variants[0].prices[0].currency_code

  return (
    <Link href={`/product/${props.product.id}`} passHref={false}>
      <div className="rounded bg-midnight-gray cursor-pointer">
        {props.product.thumbnail && (
          <div className="p-4">
            <div className="relative pb-[100%]">
              <Image alt="product thumbnail" src={props.product.thumbnail} layout="fill" />
            </div>
          </div>
        )}
        <div className="px-[15px] pb-[6px] flex flex-wrap gap-2 overflow-hidden">
          <div className="min-w-[200px] flex-1">
            {props.product.title}
          </div>
          <div className="whitespace-nowrap">
            {CURRENCY_SIGNS[currency] || currency.toUpperCase()} {priceDomain[0] === priceDomain[1] ? priceDomain[0] : `${priceDomain[0]} - ${priceDomain[1]}`}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductListCard
