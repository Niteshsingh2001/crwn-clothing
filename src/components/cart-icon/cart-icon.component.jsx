import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.style"

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export default function CartIcon() {

    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toogle = () => setIsCartOpen(!isCartOpen)


    return (
        <CartIconContainer onClick={toogle}>
            <ShoppingIcon />
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
