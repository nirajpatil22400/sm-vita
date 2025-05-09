// 1] display list by profession
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

// 2] all list will be diplay using map so it will show all list data is present in data.js file
// import { people } from "../data.js";
// import { getImageUrl } from "../utils.js";

// export default function List() {
//   const listItems = people.map((person) => (
//     <li key={person.id} className="person-card">
//       <img src={getImageUrl(person)} alt={person.name} className="person-img" />
//       <p>
//         <b>{person.name}:</b> {person.profession}, known for{" "}
//         {person.accomplishment}
//       </p>
//     </li>
//   ));

//   return (
//     <>
//       <h2 className="list-heading">🌍 List of Great Scientists</h2>
//       <ul className="person-list">{listItems}</ul>
//     </>
//   );
// }

// 3] On button(button name filter ) onclick it will display chemist profession details
// import { useState } from "react";
// import { people } from "../data.js";
// import { getImageUrl } from "../utils.js";

// export default function List() {
//   const [showChemists, setShowChemists] = useState(false);

//   const filteredPeople = showChemists
//     ? people.filter((person) => person.profession === "chemist")
//     : people;

//   return (
//     <div>
//       <h2 className="list-heading">🌍 List of Great Scientists</h2>
//       <button
//         className="filter-btn"
//         onClick={() => setShowChemists(!showChemists)}
//       >
//         {showChemists ? "Show All" : "Filter Chemists"}
//       </button>
//       <ul className="person-list">
//         {filteredPeople.map((person) => (
//           <li key={person.id} className="person-card">
//             <img
//               src={getImageUrl(person)}
//               alt={person.name}
//               className="person-img"
//             />
//             <p>
//               <b>{person.name}:</b> {person.profession}, known for
//               {person.accomplishment}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//or wrong code because not used usestate to update data
//You're close, but there are three key issues:
//You're not using React state to re-render on data change.
//itemlist is not used properly inside JSX (<ul>itemlist</ul> should be <ul>{itemlist}</ul>).
//You're not using a unique key inside .map().

// import { people } from "../data.js";
// import { getImageUrl } from "../utils.js";

// export default function List() {
//   let data = people;
//   function handledata() {
//     data = people.filter((person) => person.profession == "chemist");
//   }
//   const itemlist = data.map((person) => <li>person.name</li>);
//   return (
//     <div>
//       <ul>itemlist</ul>
//       <button onClick={handledata}>filter chem</button>
//     </div>
//   );
// }

//or now correct code here above
import { useState } from "react";
import { people } from "../data.js";
import { getImageUrl } from "../utils.js";

export default function List() {
  const [data, setData] = useState(people); // usestate sea update kiya data

  //   let data = people; isse likha same upper wale code mea isi reason button click pea data show naho hoa raha tha reason data update nahi hua tha data update karne kea liya hame usestate sea data update karna padega so iss ke place use stae likhegea check above this
  function handleData() {
    const filtered = people.filter((person) => person.profession === "chemist");
    setData(filtered);
  }

  const itemlist = data.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} width={100} />
      <p>
        <b>{person.name}</b> - {person.profession}
      </p>
    </li>
  ));

  return (
    <div>
      <button onClick={handleData}>Filter Chemists</button>
      <ul>{itemlist}</ul>
    </div>
  );
}
