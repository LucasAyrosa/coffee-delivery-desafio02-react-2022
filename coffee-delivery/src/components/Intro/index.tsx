import { IntroContainer, Items, ListItem, Title } from "./styles";
import {ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import introImg  from '../../assets/introImg.svg';

export function Intro() {
    return (
        <IntroContainer>
            <div>
                <Title>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                </Title>
                <Items>
                    <ListItem color="yellowDark"><ShoppingCart size={32} weight='fill' />Compra simples e segura</ListItem>
                    <ListItem color="yellow"><Timer size={32} weight='fill' />Entrega rápida e rastreada</ListItem>
                    <ListItem color="baseText"><Package size={32} weight='fill' />Embalagem mantém o café intacto</ListItem>
                    <ListItem color='purple'><Coffee size={32} weight='fill' />O café chega fresquinho até você</ListItem>
                </Items>
            </div>
            <img src={introImg} alt="" />
        </IntroContainer>
    )
}