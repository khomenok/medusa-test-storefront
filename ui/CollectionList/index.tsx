import { ProductCollection } from '@medusajs/medusa'
import { useCallback } from 'react'
import clsx from 'classnames'

type CollectionListItemProps = {
  itemTitle: string
  itemId?: string
  isSelected?: boolean
  onSelectId?: (newSelectedId?: string) => void
}

const CollectionListItem = (props: CollectionListItemProps) => {
  const handleClick = useCallback(
    () => props.onSelectId && props.onSelectId(props.itemId),
    [props.onSelectId, props.itemId],
  )

  return (
    <li
      className={clsx(
        'py-1 px-3 rounded-lg border-[black-80] border-2 border cursor-pointer whitespace-nowrap',
        props.isSelected && 'border-orange-dark',
        'hover:border-grey-20',
      )}
      onClick={handleClick}
    >
      {props.itemTitle.toLowerCase()}
    </li>
  )
}

type CollectionListProps = {
  list?: ProductCollection[]
  selectedId?: string
  onSelectId?: (newSelectedId?: string) => void
}

const CollectionList = (props: CollectionListProps) => {
  return (
    <ul
      className={clsx(
        'flex flex-wrap items-center justify-center gap-2',
        !props.list?.length && 'opacity-0',
      )}
    >
      <CollectionListItem
        itemTitle="All"
        onSelectId={props.onSelectId}
        isSelected={!props.selectedId}
      />
      {props.list?.map((collection) => (
        <CollectionListItem
          key={collection.id}
          itemTitle={collection.title}
          itemId={collection.id}
          onSelectId={props.onSelectId}
          isSelected={props.selectedId === collection.id}
        />
      ))}
    </ul>
  )
}

export default CollectionList
