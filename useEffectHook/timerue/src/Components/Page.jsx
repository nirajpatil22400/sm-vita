// Importing React hooks: useState (for state management) and useEffect (for side effects)
import { useState, useEffect } from "react";

// Importing a utility function to simulate API call
import { fetchBio } from "../api";

// This component displays a biography based on the selected person
export default function Page() {
  // 'person' state stores the currently selected name; default is "Alice"
  const [person, setPerson] = useState("Alice");

  // 'bio' state will store the fetched biography data; initially null
  const [bio, setBio] = useState(null);

  // useEffect runs after the component renders and whenever 'person' changes
  useEffect(() => {
    // 'ignore' flag helps avoid updating state if the component re-renders quickly
    let ignore = false;

    // Resetting bio to null so "Loading..." is shown while new data is being fetched
    setBio(null);

    // Fetch the bio data for the selected person
    fetchBio(person).then((result) => {
      // Only update bio if this is the latest fetch (ignore prevents race conditions)
      if (!ignore) {
        setBio(result);
      }
    });

    // Cleanup function that runs before the next effect or when component unmounts
    // It sets 'ignore' to true to cancel setting state for any outdated fetch
    return () => {
      ignore = true;
    };
  }, [person]); // Dependency array: runs effect only when 'person' changes

  // JSX returned by the component
  return (
    <>
      {/* Dropdown to choose a person. Changing selection updates 'person' state */}
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>

      <hr />

      {/* Shows the fetched bio or "Loading..." while data is being fetched */}
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}
