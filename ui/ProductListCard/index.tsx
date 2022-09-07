import { Product } from '@medusajs/medusa'
import Link from 'next/link'
import Image from 'next/image'
import { useMemo } from 'react'
import {
  getPriceDomain,
  getCurrency,
  formatPrice,
} from '../../utils/formatPrice'
import clsx from 'classnames'

type ProductListCardProps = { product: Product }

const ProductListCard = (props: ProductListCardProps) => {
  const priceDomain = useMemo(
    () => getPriceDomain(props.product),
    [props.product],
  )
  const currency = useMemo(() => getCurrency(props.product), [props.product])

  return (
    <Link href={`/product/${props.product.id}`} passHref={false}>
      <li className="rounded bg-midnight-grey cursor-pointer group">
        {props.product.thumbnail && (
          <div className="p-4">
            <div
              className={clsx(
                'relative pb-[100%]',
                'transition duration-100 ease-in group-hover:scale-[1.05] lg:group-hover:scale-[1.15]',
              )}
            >
              <Image
                alt="product thumbnail"
                src={props.product.thumbnail}
                layout="fill"
              />
            </div>
          </div>
        )}
        <div className="px-[15px] pb-[6px] flex flex-wrap gap-2 overflow-hidden">
          <div className="min-w-[200px] flex-1">{props.product.title}</div>
          <div className="whitespace-nowrap">
            {formatPrice(priceDomain, currency)}
          </div>
        </div>
      </li>
    </Link>
  )
}

export default ProductListCard
