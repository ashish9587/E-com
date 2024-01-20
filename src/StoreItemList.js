import React from 'react'
import StoreItem from './StoreItem'

export default function StoreItemList({items,dispatch}) {
  return (
    items.map(i => <StoreItem key={i.id} item={i} dispatch={dispatch}/>)
  )
}
