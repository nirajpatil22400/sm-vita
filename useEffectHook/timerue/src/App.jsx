import Counter from "./Components/Counter";
import Timer from "./Components/Timer";
import Page from "./Components/Page";

function App() {
  return (
    <div className="App">
      <h2>React Timer Example</h2>
      <Timer />
      <Counter />
      <h2>Biography Fetcher</h2>
      <Page />
    </div>
  );
}

export default App;
