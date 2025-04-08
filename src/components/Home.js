import React, { createContext, useContext } from 'react'
import CartData from './cartData'
import CreateCartContext from '../utils/CartContext'
import CartContext from '../utils/CartContext'

const Home = () => {

 const {cartQuantity, dispatchCartQuantity} = useContext(CartContext)

  return (
    <div>
      {
        CartData.map(item =>((
        <div key={item.id} className='home-item'>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <div>
                <button onClick={()=> dispatchCartQuantity({type:"increment", item})}>Add</button>
            </div>
        </div>
        )))
      }
    </div>
  )
}

export default Home

