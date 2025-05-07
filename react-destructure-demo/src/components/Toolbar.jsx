// Toolbar.js
import React from "react";
import Button from "./Button"; // Importing the Button component

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    /*
We pass onPlayMovie and onUploadImage as props to two <Button> components.
This is a parent component that uses child components and forwards props.
*/
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

export default Toolbar;
