import React from 'react'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import {connect} from "react-redux"
import './cart-dropdown.scss'

const CartDropdown =({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps=state=>({
    cartItems: state.cart.cartItems
}
)

export default connect(mapStateToProps) (CartDropdown);