import React,{useReducer,useRef} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import StoreItemList from './StoreItemList';
import CartItemList from './CartItemList';



function App() {
  const [item,dispatch] = useReducer(
    reducer,[
      {id:1,name:'Nokia',price:2000,quantity:0},
      {id:2,name:'i phone',price:4000,quantity:0},
      {id:3,name:'Redmi',price:6000,quantity:0}
      
    ]
  )

  function reducer(item,action){
    switch(action.type){
      case 'add':
        return item.map(i => {
          if (i.id === action.payload.id)
            i.quantity = i.quantity+1
            return i
        })
        case 'remove':
          return item.map(i => {
            if (i.id === action.payload.id && i.quantity>0)
            i.quantity = i.quantity-1
            return i
          })
          case 'add-to-cart':
            return item.map(i => {
              if (i.id === action.payload.id)
                i.quantity = i.quantity+1
                return i
            })
            case 'remove-from-cart':
              return item.map(i => {
                if (i.id === action.payload.id && i.quantity>0)
                i.quantity = 0
                return i
              })
          default:
              return item
              
    }
  }
  function storeItempage(){
    return(
      <StoreItemList items={item} dispatch={dispatch}/>
    )
  }
  function cartList(){
    return (
      <CartItemList items={item.filter(i => i.quantity>0)} dispatch={dispatch}/>
    )
  }

  return (
    <>
    <nav>
      
      <Link to='/home' >HOME</Link>
      <Link to='/cart'>CART</Link>
    </nav>
    <Routes>
      <Route path='/home' element = {storeItempage()}></Route>
      <Route path='/cart' element={cartList()}></Route>
    </Routes>
    </>
    
  );
}

export default App;
