import React from 'react'

export default function Storeitem({item,dispatch}) {
    const allButtons = () => {
        return(
            <>
            <button onClick={e => dispatch({type:'add-to-cart',payload:{id:item.id}})}>ADD TO CART</button>
            <span> </span>
            <button onClick={e => dispatch({type:'add',payload:{id:item.id}})}>+</button>
            <span>{item.quantity}</span>
            <button onClick={e => dispatch({type:'remove',payload:{id:item.id}})}>-</button>


            </>
        )
    }
  return (
    <>
    <div>{item.name}</div>
    <div>price: {item.price}</div>
    {allButtons()}
    </>
    )
}
 