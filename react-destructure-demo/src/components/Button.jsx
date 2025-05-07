// Button.js
import React from "react";

function Button({ onClick, children }) {
/*
We use object destructuring to extract onClick and children.
children is whatever is written between <Button>...</Button>.
console.log helps us debug by showing what props were passed to this component.
*/
  console.log("Props received in Button:", { onClick, children });

  return <button onClick={onClick}>{children}</button>;
}

export default Button;
