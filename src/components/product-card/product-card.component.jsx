// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import "./product-card.style.scss"
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { useContext } from 'react';

export default function ProductCard({ product }) {

    const { name, price, imageUrl } = product;
    // const { addItemToCart } = useContext(CartContext)
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="cost">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to Cart</Button>
        </div>
    )
}
