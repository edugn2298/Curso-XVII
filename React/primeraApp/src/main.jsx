import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Button from './Componets/Button' 
import Lista from './Componets/Lista'
import Card from './Componets/Card'

const caracteriticas1 = ["Rapido","Bonito","Barato"];
const caracteristicas2 = ["Lento","Feo","Caro"];
const card1 = {title: "Card 1", description: "Description 1", image: "https://picsum.photos/200/300"};
const card2 = {title: "Card 2", description: "Description 2", image: "https://picsum.photos/200/300"};



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button text="Hola Mundo 1" background='bg-red-600'/>
    <Button text="Hola Mundo 2" background='bg-green-600'/>
    <Button text="Hola Mundo 3"/>
    <Button text="Hola Mundo 4"/>
    <Lista items={caracteriticas1}></Lista>
    <Lista items={caracteristicas2}></Lista>
    <Card card1 = {card1}></Card>
    <Card card2 = {card2}></Card>
  </StrictMode>,
)

