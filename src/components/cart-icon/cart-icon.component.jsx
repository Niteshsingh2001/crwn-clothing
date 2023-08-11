import { useDispatch, useSelector } from "react-redux"
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.style"
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"

// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";

export default function CartIcon() {

    const dispatch = useDispatch()
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const toogle = () => dispatch(setIsCartOpen(!isCartOpen))


    return (
        <CartIconContainer onClick={toogle}>
            <ShoppingIcon />
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )
}
