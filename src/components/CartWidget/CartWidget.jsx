import React from 'react'
import './cartWidget.css'

function CartWidget() 
{
  return (
    <div>
            <a href="">
              <h2>Carrito</h2>
              <button type="button" className="cart-btn btn "  
                data-target="#cart">
                (<span className="count">1 </span>)
              </button>
            </a>
    </div>
  )
}

export default CartWidget