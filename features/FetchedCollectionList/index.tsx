import {useCollections} from "medusa-react";
import CollectionList from "../../ui/CollectionList";

type FetchedCollectionListType = {
  selectedId?: string
  onSelectId?: (newSelectedId: string) => void
}

const FetchedCollectionList = (props: FetchedCollectionListType) => {
  const {collections, isLoading} = useCollections()
  return (
    <CollectionList list={collections} selectedId={props.selectedId} onSelectId={props.onSelectId} />
  )
}

export default FetchedCollectionList
