// import { CartContext } from "../../context/cart.context"
import { useDispatch, useSelector } from "react-redux"
import "./checkout-item.style.scss"
// import { useContext } from 'react'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem

    const dispatch = useDispatch()
    const Items = useSelector(selectCartItems)
    // const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)

    const ClearItemHandler = () => dispatch(clearItemFromCart(Items, cartItem))
    const addItemHandler = () => dispatch(addItemToCart(Items, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(Items, cartItem))


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
