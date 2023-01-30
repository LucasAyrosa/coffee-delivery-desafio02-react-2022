import { createContext, ReactNode, useEffect, useReducer } from "react";
import { addCoffeeInCartAction } from "../reducers/coffees/actions";
import { CoffeesReducer, CoffeeState } from "../reducers/coffees/reducers";

export enum CoffeeTypes {
    tradicional = 'Tradicional',
    especial = 'especial',
    comLeite = 'Com leite',
    alcoolico = 'Alcoólico',
    gelado = 'Gelado'
}

export interface Coffee {
    id: string,
    img: string,
    name: string,
    description: string,
    price: number,
    tags: CoffeeTypes[]
}

interface CoffeeContextType {
    coffees: Coffee[]
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProsp {
    children: ReactNode;
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderProsp) {
    const [coffeeState, dispatch] = useReducer(CoffeesReducer, {
        coffees: [],
        cartItems: []
    } as CoffeeState, () => {
        const storedStateJSON = localStorage.getItem('@coffee-delivery:coffee-state-1.0.0');
        if (storedStateJSON) return JSON.parse(storedStateJSON);
        return {
            coffees: [
                {
                    id: 'expressoTradicional',
                    img: 'src/assets/coffees/expresso.png',
                    name: 'Expresso Tradicional',
                    description: 'O tradicional café feito com água quente e grãos moídos',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional]
                },
                {
                    id: 'expressoAmericano',
                    img: 'src/assets/coffees/americano.png',
                    name: 'Expresso Americano',
                    description: 'Expresso diluído, menos intenso que o tradicional',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional]
                },
                {
                    id: 'expressoCremoso',
                    img: 'src/assets/coffees/expressoCremoso.png',
                    name: 'Expresso Cremoso',
                    description: 'Café expresso tradicional com espuma cremosa',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional]
                },
                {
                    id: 'expressoGelado',
                    img: 'src/assets/coffees/CafeGelado.png',
                    name: 'Expresso Gelado',
                    description: 'Bebida preparada com café expresso e cubos de gelo',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional, CoffeeTypes.gelado]
                },
                {
                    id: 'cafeComLeite',
                    img: 'src/assets/coffees/cafeComLeite.png',
                    name: 'Café com Leite',
                    description: 'Meio a meio de expresso tradicional com leite vaporizado',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional, CoffeeTypes.comLeite]
                },
                {
                    id: 'latte',
                    img: 'src/assets/coffees/latte.png',
                    name: 'Latte',
                    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional, CoffeeTypes.comLeite]
                },
                {
                    id: 'capuccino',
                    img: 'src/assets/coffees/capuccino.png',
                    name: 'Capuccino',
                    description: 'Bebida com canela feita em doses iguais de café, leite e espuma',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional, CoffeeTypes.comLeite]
                },
                {
                    id: 'macchiato',
                    img: 'src/assets/coffees/macchiato.png',
                    name: 'Macchiato',
                    description: 'Café expresso misturado com um pouco de leite quente e espuma',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional, CoffeeTypes.comLeite]
                },
                {
                    id: 'mocaccino',
                    img: 'src/assets/coffees/machaccino.png',
                    name: 'Mocaccino',
                    description: 'Café expresso com calda de chocolate, pouco, leite e espuma',
                    price: 9.9,
                    tags: [CoffeeTypes.tradicional, CoffeeTypes.comLeite]
                },
                {
                    id: 'chocolateQuente',
                    img: 'src/assets/coffees/chocolateQuente.png',
                    name: 'Chocolate Quente',
                    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
                    price: 9.9,
                    tags: [CoffeeTypes.especial, CoffeeTypes.comLeite]
                },
                {
                    id: 'cubano',
                    img: 'src/assets/coffees/Cubano.png',
                    name: 'Cubano',
                    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
                    price: 9.9,
                    tags: [CoffeeTypes.especial, CoffeeTypes.alcoolico, CoffeeTypes.gelado]
                },
                {
                    id: 'havaiano',
                    img: 'src/assets/coffees/havaiano.png',
                    name: 'Havaiano',
                    description: 'Bebida adocicada preparada com café e leite de coco',
                    price: 9.9,
                    tags: [CoffeeTypes.especial]
                },
                {
                    id: 'arabe',
                    img: 'src/assets/coffees/arabe.png',
                    name: 'Árabe',
                    description: 'Bebida preparada com grãos de café árabe e especiarias',
                    price: 9.9,
                    tags: [CoffeeTypes.especial]
                },
                {
                    id: 'irlandes',
                    img: 'src/assets/coffees/irlandes.png',
                    name: 'Irlandês',
                    description: 'Bebida a base de café, uísque Irlandês, açúcar e chantilly',
                    price: 9.9,
                    tags: [CoffeeTypes.especial, CoffeeTypes.alcoolico]
                }
            ],
            cartItems: []
        };
    });

    useEffect(() => {
        const stateJSON = JSON.stringify(coffeeState);
        localStorage.setItem('@coffee-delivery:coffee-state-1.0.0', stateJSON);
    }, [coffeeState])

    const { coffees } = coffeeState;

    function addCoffeeInCart(coffeeId: string, amount: number) {
        dispatch(addCoffeeInCartAction(coffeeId, amount));
    }

    return (
        <CoffeeContext.Provider
            value={{
                coffees
            }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}