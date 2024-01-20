import React from 'react'

export default function Cart({item,dispatch}) {
  return (
    <div>
        {item.name}
        <div>
            <label>price:</label>
            {item.price*item.quantity}
        </div>
        <button onClick={e => dispatch({type:'remove-from-cart',payload:{id:item.id}})}>Remove</button>
        <button onClick={e => dispatch({type:'add',payload:{id:item.id}})}>+</button>
        <span>{item.quantity}</span>
        <button onClick={e => dispatch({type:'remove',payload:{id:item.id}})}>-</button>
    </div>
  )
}

