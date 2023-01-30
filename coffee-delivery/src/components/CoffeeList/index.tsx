import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, ListCoffee } from "./styles";

export function CoffeeList() {
    const { coffees } = useContext(CoffeeContext);

    return (
        <CoffeeListContainer>
            <h2>Nossos cafés</h2>
            <ListCoffee>
                {coffees.map(coffee => 
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                )}
            </ListCoffee>
        </CoffeeListContainer>
    )
}