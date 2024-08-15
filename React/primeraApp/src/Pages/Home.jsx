import Button from "../Components/Shared/Button";
import List from "../Components/Shared/List";
import Card from "../Components/Shared/Card";

export default function Home() {
  return (
    <>
      <Button text="Hola Mundo 1" background="bg-red-600" />
      <Button text="Hola Mundo 2" background="bg-green-600" />
      <Button text="Hola Mundo 3" />
      <Button text="Hola Mundo 4" />
      <List items={["Rápido", "Bonito", "Barato"]} />
      <List items={["Lento", "Feo", "Caro"]} />
      <Card
        title="Card 1"
        description="Descripción de la card 1"
        img="https://via.placeholder.com/150"
      />
    </>
  );
}