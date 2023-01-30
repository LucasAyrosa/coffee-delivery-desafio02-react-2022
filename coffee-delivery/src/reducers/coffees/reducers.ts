import produce from "immer";
import { Coffee } from "../../contexts/CoffeeContext";
import { ActionTypes } from "./actions";

export interface CartItem {
    coffee: Coffee,
    amount: number
}

export interface CoffeeState {
    coffees: Coffee[],
    cartItems: CartItem[]
}

interface CoffeeActionReducer {
    type: ActionTypes,
    payload: {
        coffeeId: string,
        amount: number
    }
}

export function CoffeesReducer(state: CoffeeState, action: CoffeeActionReducer) {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE_IN_CART: {
            const currentCoffeeIndex = state.cartItems.findIndex(item => item.coffee.id === action.payload.coffeeId);

            if(currentCoffeeIndex < 0) {
                return produce(state, draft => {
                    const newCoffeeToCart = state.coffees.find(coffee => coffee.id === action.payload.coffeeId);
                    if(newCoffeeToCart)
                        draft.cartItems.push({coffee: newCoffeeToCart, amount: action.payload.amount});
                    else return state;
                })
            } else {
                return produce(state, draft => {
                    draft.cartItems[currentCoffeeIndex].amount += action.payload.amount;
                })
            }
        }
        default: 
            return state;
    }
}