import {ProductCollection} from "@medusajs/medusa";

type CollectionListProps = {
  list?: ProductCollection[]
  selectedId?: string
  onSelectId?: (newSelectedId: string) => void
}

const CollectionList = (props: CollectionListProps) => {
  return (
    <div>
      {props.list?.map(collection => (
        <div
          key={collection.id}
          onClick={() => props.onSelectId && props.onSelectId(collection.id)}
        >
          {collection.id} - {collection.title}
        </div>
      ))}
    </div>
  )
}

export default CollectionList
