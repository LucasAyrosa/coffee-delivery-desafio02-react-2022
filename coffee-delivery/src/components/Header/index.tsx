import { Cart, HeaderContainer, Location } from "./styles";
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from 'phosphor-react';
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header() {
    const { cartItems } = useContext(CoffeeContext);

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logoCoffeeDelivery} alt="" />
            </NavLink>
            <nav>
                <Location>
                    <MapPin  size={22} weight='fill' />
                    <span>Niterói, RJ</span>
                </Location>
                <Cart>
                    <NavLink to="/checkout" title="carrinho">
                        <ShoppingCart size={22} weight="fill" />
                        {cartItems.length ?
                            <span>{cartItems.reduce((acc, current) => acc + current.amount, 0)}</span>
                            : null
                        }
                    </NavLink>
                </Cart>
            </nav>            
        </HeaderContainer>
    )
}