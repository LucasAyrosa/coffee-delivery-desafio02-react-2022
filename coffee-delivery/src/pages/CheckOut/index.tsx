import { useContext } from "react";
import { AddressForm } from "../../components/AddressForm";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { CartContainer, CheckOutContainer, SelectedCoffees, TotalCalc } from "./styles";

export function CheckOut() {
    const { cartItems } = useContext(CoffeeContext);

    const totalPrice = cartItems.reduce((acc, current) => acc + (current.coffee.price * current.amount), 0)

    return (
        <CheckOutContainer>
            <AddressForm />
            <SelectedCoffees>
                <h3>Cafés selecionados</h3>
                <CartContainer>
                    <ul>
                        {cartItems.map(item => <CoffeeCartCard {...item} />)}
                    </ul>
                    <TotalCalc>
                        <span>Total de itens <span>R$ {totalPrice.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></span>
                        <span>Entrega <span>R$ 3,50</span></span>
                        <span className="total-span">Total <strong>R$ {(totalPrice + 3.5).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong></span>
                    </TotalCalc>
                    <button className="confirm-button">Confirmar pedido</button>
                </CartContainer>
            </SelectedCoffees>
        </CheckOutContainer>
    )
}