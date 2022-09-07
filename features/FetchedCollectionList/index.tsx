import { useCollections } from 'medusa-react'
import CollectionList from '../../ui/CollectionList'

type FetchedCollectionListType = {
  selectedId?: string
  onSelectId?: (newSelectedId?: string) => void
}

const FetchedCollectionList = (props: FetchedCollectionListType) => {
  const { collections } = useCollections()
  return (
    <div className="mb-4">
      <CollectionList
        list={collections}
        selectedId={props.selectedId}
        onSelectId={props.onSelectId}
      />
    </div>
  )
}

export default FetchedCollectionList
