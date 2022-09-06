import {Product} from "@medusajs/medusa";

type ProductListProps = {
  list?: Product[]
}

const ProductList = (props: ProductListProps) => {
  return (
    <div>
      {props.list?.map(product => (
        <div
          key={product.id}
        >
          {product.id} - {product.title}
        </div>
      ))}
    </div>
  )
}

export default ProductList
