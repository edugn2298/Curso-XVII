import ProtoTipes from "prop-types";

Lista.propTypes = {
  items: ProtoTipes.arrayOf(ProtoTipes.string).isRequired
};

export default function Lista({ items}) {
  return (
    <ul className="list-disc list-inside">
      {items.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}
