import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.style";
// import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
// import { CartContext } from '../../context/cart.context'
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {

    // const { currentUser } = useContext(UserContext)

    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    // const { isCartOpen } = useContext(CartContext)

    const handleSignOut = async () => {
        await signOutUser()

    }
    console.log(currentUser)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        Shop
                    </NavLink>
                    {currentUser ? <NavLink onClick={handleSignOut}>Sign Out</NavLink> : <NavLink to="/auth">Sign In</NavLink>}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation