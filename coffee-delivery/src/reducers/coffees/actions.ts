export enum ActionTypes {
    ADD_COFFEE_IN_CART = 'ADD_COFFEE_IN_CART',
    SUBTRACT_COFFEE_IN_CART = 'SUBSTRACT_COFFEE_IN_CART',
    REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART'
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

export function subtractCoffeeInCartAction(coffeeId:string, amount: number) {
    return {
        type: ActionTypes.SUBTRACT_COFFEE_IN_CART,
        payload: {
            coffeeId,
            amount
        }
    }
}

export function removeCoffeeFromCartAction(coffeeId: string) {
    return {
        type: ActionTypes.REMOVE_COFFEE_FROM_CART,
        payload: {
            coffeeId,
            amount: 0
        }
    }
}
