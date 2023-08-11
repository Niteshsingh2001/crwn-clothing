import React, { useContext } from 'react';
import Button from '../button/button.component';
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.style";
import CardItem from '../Cart-Item/Cart-Item.component';
// import { CartContext } from '../../context/cart.context';

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';


const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext);

    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()


    const goToCheckout = () => {
        navigate("/checkout")
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CardItem key={cartItem.id} CardItems={cartItem} />
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>

            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>

        </CartDropdownContainer>
    );
};

export default CartDropdown;