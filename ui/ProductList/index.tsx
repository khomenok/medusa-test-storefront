import {Product} from "@medusajs/medusa";
import ProductListCard from "../ProductListCard";

type ProductListProps = {
  list?: Product[]
}

const ProductList = (props: ProductListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-4 py-3 px-6">
      {props.list?.map(product => (
        <ProductListCard
          key={product.id}
          product={product}
        />
      ))}
    </ul>
  )
}

export default ProductList
