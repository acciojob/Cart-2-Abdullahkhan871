import React, { useContext } from 'react'
import CartContext from '../utils/CartContext'

const Cart = () => {

  const {cartQuantity,dispatchCartQuantity} =useContext(CartContext);

  return (
    <div>
      {
        cartQuantity.products.length > 0 && (
          cartQuantity.products.map((item)=>(
            item.amount > 0 ? (
            <div id="cart-items-list" key={item.id} className='cart-item'>
                <h2>{item.title}</h2>
                <p id={`cart-item-price-${item.id}`}>{item.price}</p>
                <div>
                    <button id={`decrement-btn-${item.id}`} onClick={()=>item.amount != 0 && dispatchCartQuantity({type: "decrement", item})}>-</button>
                    <span id={`cart-amount-${item.id}`}>{item.amount}</span>
                    <button id={`increment-btn-${item.id}`} onClick={()=>dispatchCartQuantity({type: "increment", item})}>+</button>
                    <button onClick={()=>dispatchCartQuantity({type: "clearMe", item})}>Clear Me</button>
                </div>
            </div>
            )
            : ""
          ))
        )
      }

      <div>
        {
          cartQuantity.products.length > 0 && (
            <p id='cart-total-amount' className='total-amount'>
              ${

                function (){
                  let x = cartQuantity.products.reduce((total, item)=> {
                    let singleItemTotal = item.amount * item.price;
                    return total + singleItemTotal;
                  } ,0)
                  return x.toFixed("2")
                }()
              }
            </p>
          )
        }

        {
          cartQuantity.products.length > 0 && (
            <button id='clear-all-cart' onClick={()=> dispatchCartQuantity({type: "reset"})}>Clear All cart</button>
          )
        }
      </div>

    </div>
  )
}

export default Cart