export default function Card({ title: cardTitle, description: cardDescription, image: cardImage }) {
  return (
    <div>
      <h1>{cardTitle}</h1>
      <p>{cardDescription}</p>
      <img src={cardImage} alt={cardTitle} />
    </div>
  );
}
/*export default function Card({ title, description, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image}/>
    </div>
  )
}*/
