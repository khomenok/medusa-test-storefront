import {Product} from "@medusajs/medusa";

type ProductCardType = {product: Product}

const ProductCard = ({product}: ProductCardType) => {
  return (
    <div>
      {product.title}
    </div>
  )
}

export default ProductCard
