import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {
  // 3 TODO - fetch products from the cart store, import useSelector
  const products = useSelector((store) => store.cart.items)

  // 6 TODO - calculate total from the sum of all products in the cart
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))
  // const totalPrice = 0

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">🛒</span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
