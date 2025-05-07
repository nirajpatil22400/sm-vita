// src/App.js
import { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0); // Hook to track which sculpture is shown

  function handleClick() {
    setIndex(index + 1); // Go to next sculpture
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
