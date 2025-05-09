import { people } from "../data.js";
import { getImageUrl } from "../utils.js";

export default function List() {
  const chemists = people.filter(
    (person) =>
      person.profession === "chemist" || person.profession === "mathematician"
  );

  const listItems = chemists.map((person) => (
    <li key={person.id} className="card">
      <img className="avatar" src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b>
        <br />
        <span className="profession">{person.profession}</span> <br />
        <span className="info">Known for: {person.accomplishment}</span>
      </p>
    </li>
  ));

  return <ul className="list">{listItems}</ul>;
}
