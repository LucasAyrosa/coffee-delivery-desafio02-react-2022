import { Coffee, CoffeeContext } from "../../contexts/CoffeeContext"
import { ButtonCart, BuyActions, CoffeeBuy, CoffeeCardContainer, CoffeeCounter, CoffeeDescription, CoffeeName, CoffeeTag, CoffeeTags } from "./styles"
import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from "react";

interface CoffeeCardProps {
    coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    const { addCoffeeInCart } = useContext(CoffeeContext);

    const [coffeeAmount, setCoffeeAmount] = useState(0);

    const handleSumCount = () => {
        setCoffeeAmount(state => state + 1);
    }

    const handleSubtractCount = () => {
        setCoffeeAmount(state => {
            const newState = state - 1
            if(newState < 0) return 0;
            return newState;
        });
    }

    const handleAddCoffeeInCart = (coffeeId: string) => {
        addCoffeeInCart(coffeeId, coffeeAmount);
        setCoffeeAmount(0);
    }

    return (
        <CoffeeCardContainer>
            <img src={coffee.img} width={120} height={120} alt="" />
            <CoffeeTags>
                {coffee.tags.map(tag =>
                    <CoffeeTag key={tag}>{tag.toUpperCase()}</CoffeeTag>
                )}
            </CoffeeTags>
            <CoffeeName>{coffee.name}</CoffeeName>
            <CoffeeDescription>{coffee.description}</CoffeeDescription>
            <CoffeeBuy>
                <span>
                    R$ <strong>{coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</strong>
                </span>
                <BuyActions>
                    <CoffeeCounter>
                        <button onClick={handleSubtractCount}>-</button>
                        <span>{coffeeAmount}</span>
                        <button onClick={handleSumCount}>+</button>
                    </CoffeeCounter>
                    <ButtonCart onClick={() => handleAddCoffeeInCart(coffee.id)}>
                        <ShoppingCart size={22} weight='fill' />
                    </ButtonCart>
                </BuyActions>
            </CoffeeBuy>
        </CoffeeCardContainer>
    )
}