import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { Products } from 'components/Products'
import { Cart } from 'components/Cart'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products' 

const reducer = combineReducers({
  cart: cart.reducer,
  products: products.reducer
}) 

const store = configureStore ({ reducer })
export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)

// set up store hight up i herarcy, 
// start with reducers, cart and product slice.
// import provider react-redux, wrap everything (last, add store prop).
// import configureStore, combineReducers from toolkit,
// combine cart and product reducers and last create store add prop.
