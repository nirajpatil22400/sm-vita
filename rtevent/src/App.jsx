import "./App.css";

let App = function () {
  function handleClick() {
    alert("You clicked button!");
  }
  return (
    <>
      <h1>
        Responding to events  You can respond to events by declaring event
        handler functions inside your components:
      </h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
export default App;
