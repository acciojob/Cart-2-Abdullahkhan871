import React, { useReducer } from 'react'
import CartContext from './CartContext';

const initialState = {
  type : null,
  products : []
}
function reducer(state, action){

  switch (action.type){

    case "increment" :
      return {
        ...state,
        products : modifyProducts(state.products, action.item)
      }
    case "decrement" :
      return {
        ...state,
        products : modifyProducts1(state.products, action.item)
      }
    
      case "clearMe" :
        return {
          type : null,
          products : state.products.filter(list => list.id != action.item.id)
        } 
    case "reset":
      return {
        type : null,
        products : []
      }
  
    default : 
      return state;
  }
}
function modifyProducts(products, currentItem){
  let itemExist = products.find((item)=> item.id == currentItem.id)

  if(itemExist){
    return products.map(item => item.id == currentItem.id ? {...item, amount : item.amount + 1} : item)
  }
  else {
    return [...products, currentItem]
  }
}

function modifyProducts1(products, currentItem){
  let itemExist = products.find((item)=> item.id == currentItem.id);

  if(itemExist && itemExist.amount != 0){
    const newProduct = products.map(item => item.id == currentItem.id ? {...item, amount : item.amount - 1} : item)
    return newProduct.filter(item => item.amount > 0)
  }
}


const CartProvider = ({children}) => {

  const [cartQuantity, dispatchCartQuantity] = useReducer(reducer, initialState)

  return (

    <CartContext.Provider value={{cartQuantity, dispatchCartQuantity}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider