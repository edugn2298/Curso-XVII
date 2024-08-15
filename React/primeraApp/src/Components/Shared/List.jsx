import ProtoTipes from "prop-types";

List.propTypes = {
  items: ProtoTipes.arrayOf(ProtoTipes.string).isRequired
};

export default function List({ items}) {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}
