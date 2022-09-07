import {useProducts} from "medusa-react";
import {useMemo} from "react";
import {StoreGetProductsParams} from "@medusajs/medusa";
import ProductList from "../../ui/ProductList";

type FetchedProductListType = {
  collectionId?: string
}

const FetchedProductList = (props: FetchedProductListType) => {
  const queryProps = useMemo<StoreGetProductsParams>(() => ({
    collection_id: props.collectionId ? [props.collectionId] : undefined
  }), [props.collectionId])

  const {products} = useProducts(queryProps)

  return (
    <ProductList list={products} />
  )
}

export default FetchedProductList
