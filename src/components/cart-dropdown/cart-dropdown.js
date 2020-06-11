import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'

import './cart-dropdown.styles.scss'
import { selectCartItem } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem} item={cartItem} />
        ))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectCartItem
})

export default connect(mapStateToProps)(CartDropdown)