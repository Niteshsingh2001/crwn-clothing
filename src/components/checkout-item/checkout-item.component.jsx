import { CartContext } from "../../context/cart.context"
import "./checkout-item.style.scss"

import React, { useContext } from 'react'





export default function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity, id } = cartItem


    const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)

    const ClearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemToCart(cartItem)


    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={addItemHandler}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={removeItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>

            <div className="remove-button" onClick={ClearItemHandler}>
                &#10005;
            </div>
        </div>
    )
}
