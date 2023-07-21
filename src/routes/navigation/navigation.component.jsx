import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.style";
import { UserContext } from '../../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component.jsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../context/cart.context'


const Navigation = () => {

    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    const handleSignOut = async () => {
        await signOutUser()

    }

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
                    {!currentUser ? <NavLink to="/auth">
                        Sign In
                    </NavLink> : <NavLink onClick={handleSignOut}>
                        Sign Out
                    </NavLink>}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation