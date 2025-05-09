import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    //   return () => clearTimeout(timeout); // Cleanup function (clearTimeout) is called before the next effect runs, to prevent memory leaks or overlapping timers.
  }, []); //[]add stop empty dependency array: runs only once
  // [] remove : continuse update after 1000ms
  return <h1>I've rendered {count} times!</h1>;
}

/*
 What is useEffect?
In React, useEffect is a Hook that lets you run side effects in function components. Side effects include things like:
Fetching data
Setting up subscriptions
Starting a timer
Manually manipulating the DOM

Here's what happens step-by-step:
Component renders for the first time.
useEffect runs after every render (because no dependency array is passed).
Inside useEffect:
setTimeout sets a 1-second delay.
After 1 second, setCount updates the state, causing the component to re-render.
Component re-renders, and useEffect runs again (because no dependency array).
Cleanup function (clearTimeout) is called before the next effect runs, to prevent memory leaks or overlapping timers.

Important Note:
This code runs the effect after every render, so it's like a ticking clock. But it's more efficient to use setInterval if you're trying to increment every second. Or, if you only want the effect to run once on mount, you can use this:
 */
