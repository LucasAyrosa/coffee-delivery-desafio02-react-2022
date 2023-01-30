import { AddressFormContainer, FormAddress, FormPayment } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank } from 'phosphor-react';

export function AddressForm() {
    return (
        <AddressFormContainer>
            <h3>Complete seu pedido</h3>
            <FormAddress>
                <div className="title-address-form">
                    <MapPinLine size={22}/>
                    <span>
                        <h5>Endereço de Entrega</h5>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </span>
                </div>
                <input type="text" placeholder="CEP" />
                <input className="w-full" type="text" placeholder="Rua" />
                <div className="info-1">
                    <input type="text" placeholder="Número" />
                    <input className="w-full" type="text" placeholder="Complemento" />
                </div>
                <div className="info-2">
                    <input type="text" placeholder="Bairro" />
                    <input className="w-full" type="text" placeholder="Cidade" />
                    <input className="w-60" type="text" placeholder="UF" />
                </div>
            </FormAddress>
            <FormPayment>
                <div className="title-payment-form">
                    <CurrencyDollar size={22}/>
                    <span>
                        <h5>Pagamento</h5>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </span>
                </div>
                <div className="group-button">
                    <button><CreditCard size={22} /> CARTÃO DE CRÉDITO</button>
                    <button><Bank size={22} /> CARTÃO DE DÉBITO</button>
                    <button><Money size={22} /> DINHEIRO</button>
                </div>
            </FormPayment>
        </AddressFormContainer>
    )
}