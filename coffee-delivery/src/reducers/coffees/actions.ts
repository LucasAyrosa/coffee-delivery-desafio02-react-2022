export enum ActionTypes {
    ADD_COFFEE_IN_CART = 'ADD_COFFEE_IN_CART'
}

export function addCoffeeInCartAction(coffeeId: string, amount: number){
    return {
        type: ActionTypes.ADD_COFFEE_IN_CART,
        payload: {
            coffeeId,
            amount
        }
    }
}