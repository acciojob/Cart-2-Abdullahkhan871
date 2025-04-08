import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../utils/CartContext';

const NavigationBar = () => {
    const navigate = useNavigate()
      const {cartQuantity,dispatchCartQuantity} =useContext(CartContext);

  return (
    <header>
        <nav>
            <ul>
                <li>
                    useReducer
                </li>
                <li onClick={()=>navigate("/cart")}>
                    Cart count ==   
                    <span id="nav-cart-item-count">{cartQuantity.products.length > 0 ? cartQuantity.products.length : "0"}</span>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavigationBar