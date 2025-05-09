import React from "react";
import ShoppingList from "./Components/ShoppingList"; // ⬅️ import your component

function App() {
  return (
    <div className="App">
      <h1>My Shopping List</h1>
      <ShoppingList /> {/* ⬅️ use your component */}
    </div>
  );
}

export default App;
