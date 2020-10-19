import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import{ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from './Header.styles'





const Header = ({currentUser, hidden})=>{
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/contact'>Contact</OptionLink>
                {
                currentUser ? <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>:
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
            </OptionsContainer>
            {
                hidden? null:
            <CartDropdown/>
            }
        </HeaderContainer>
    )
}

// createStructuredSelector passes in top level state into each selector
const mapStateToProps=createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

})

export default connect(mapStateToProps) (Header);