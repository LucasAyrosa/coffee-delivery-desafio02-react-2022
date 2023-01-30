import { Coffee, CoffeeContext } from "../../contexts/CoffeeContext";
import { Actions, CoffeeCartCardContainer, Details } from "./styles";
import { Trash } from 'phosphor-react';
import { CoffeeCounter, CoffeeDescription } from "../CoffeeCard/styles";
import { useContext } from "react";

interface CoffeeCartCardProps {
    coffee: Coffee,
    amount: number
}

export function CoffeeCartCard({coffee, amount}: CoffeeCartCardProps) {
    const { addCoffeeInCart, subtractCoffeeInCart, removeCoffeeFromCart } = useContext(CoffeeContext);

    const handleSubtractCount = (coffeeId: string) => {
        subtractCoffeeInCart(coffeeId, 1);
    }

    const handleSumCount = (coffeeId: string) => {
        addCoffeeInCart(coffeeId, 1)
    }

    const handleRemoveItem = (coffeeId: string) => {
        removeCoffeeFromCart(coffeeId)
    }

    return (
        <CoffeeCartCardContainer>
            <img src={coffee.img} width={64} height={64} alt="" />
            <Details>
                <span>
                    {coffee.name}
                    <strong>R${coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong>
                </span>
                <Actions>
                    <CoffeeCounter>
                        <button onClick={(event) => {event?.preventDefault(); handleSubtractCount(coffee.id)}}>-</button>
                        <span>{amount}</span>
                        <button onClick={(event) => {event?.preventDefault(); handleSumCount(coffee.id)}}>+</button>
                    </CoffeeCounter>
                    <button className="trash-button" onClick={() => handleRemoveItem(coffee.id)}><Trash /> REMOVER</button>
                </Actions>
            </Details>
        </CoffeeCartCardContainer>
    )
}