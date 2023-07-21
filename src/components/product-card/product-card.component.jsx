import { CartContext } from "../../context/cart.context";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component"
import "./product-card.style.scss"
import { useContext } from 'react';

export default function ProductCard({ product }) {

    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="cost">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart} >Add to Cart</Button>
        </div>
    )
}
