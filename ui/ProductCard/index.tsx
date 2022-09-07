import {Product} from "@medusajs/medusa";

type ProductCardProps = {product: Product}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div>
      {product.title}
    </div>
  )
}

export default ProductCard
