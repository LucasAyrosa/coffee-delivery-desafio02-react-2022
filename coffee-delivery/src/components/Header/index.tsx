import { Cart, HeaderContainer, Location } from "./styles";
import logoCoffeeDelivery from '../../assets/logoCoffeeDelivery.svg'
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from 'phosphor-react';

export function Header() {
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
                    </NavLink>
                </Cart>
            </nav>            
        </HeaderContainer>
    )
}