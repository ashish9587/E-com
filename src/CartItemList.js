import React from 'react'
import Cart from './Cart'

export default function CartItemList({items,dispatch}) {
function totalAmount(){
    const productprice = items.map(i => i.quantity*i.price)
    const total = productprice.reduce((a,b) => (a+b),0)
    return total
}
  return (
    <>
    <div>
        {items.map(i => <Cart key={i.id} item={i} dispatch={dispatch}/>)}
    </div>
    <label>totalAmount{totalAmount()}</label>
    </>
    
  )
}
