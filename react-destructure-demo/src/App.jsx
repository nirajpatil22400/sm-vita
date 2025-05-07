// App.js
import React from "react";
import Toolbar from "./components/Toolbar";

function App() {
  /*
This is the root component.
It sends onPlayMovie and onUploadImage functions as props to Toolbar.
 */
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}

export default App;
