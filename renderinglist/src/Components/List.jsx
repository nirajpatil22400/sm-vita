// import { people } from "../data.js";
// import { getImageUrl } from "../utils.js";

// export default function List() {
//   const chemists = people.filter(
//     (person) =>
//       person.profession === "chemist" || person.profession === "mathematician"
//   );

//   const listItems = chemists.map((person) => (
//     <li key={person.id} className="card">
//       <img className="avatar" src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}</b>
//         <br />
//         <span className="profession">{person.profession}</span> <br />
//         <span className="info">Known for: {person.accomplishment}</span>
//       </p>
//     </li>
//   ));

//   return <ul className="list">{listItems}</ul>;
// }

// all list will be diplay using map so it will show all list data is present in data.js file
import { people } from "../data.js";
import { getImageUrl } from "../utils.js";

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id} className="person-card">
      <img src={getImageUrl(person)} alt={person.name} className="person-img" />
      <p>
        <b>{person.name}:</b> {person.profession}, known for{" "}
        {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <h2 className="list-heading">🌍 List of Great Scientists</h2>
      <ul className="person-list">{listItems}</ul>
    </>
  );
}
