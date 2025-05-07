import { useState } from "react";
export default function App() {
  return (
    /*
    This is the main/root component.
    It renders a title and the MyButton component.
     */
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      {/*
       Why the Button Updates Separately?
       answer->Each button will maintain its own count, because:
       useState is scoped inside the component
       Every instance of MyButton gets its own independent state
       */}
    </div>
  );
}
function MyButton() {
  const [count, setCount] = useState(0); // Step 1: Declare state
  function handleClick() {
    setCount(count + 1); // Step 2: Update state when button is clicked
    console.log(
      "Count before update:",
      count
    ); /* console.log(count) will show the previous value because state updates are asynchronous. */
  }
  /*
  useState(0) creates a count state variable with initial value 0.
  setCount is the function used to update count.
  Every time the button is clicked:
  handleClick runs.
  It calls setCount(count + 1).
  This triggers a re-render of the MyButton component with the updated count.
   */
  return (
    <>
      <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
}
/*
***Flow of Execution (Step by Step)

React loads App(), and displays:

Counters that update separately
[Clicked 0 times]

You click the button:
1.handleClick() is triggered.
2.setCount(count + 1) is called.
3.React updates the value of count.
4.The component re-renders with new value.

You click again:
1.New count value used.
2.Example: count = 1 → 2 → 3 → ...

***Debugging Tip
If you want to see the value in the console, use:


function handleClick() {
  setCount(count + 1);
  console.log("Count before update:", count);
}
console.log(count) will show the previous value because state updates are asynchronous.

***If you want to get the latest value after state updates, use useEffect:

import { useEffect, useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updated count:", count);
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
} 
 */
