// import { useState } from "react";
// function App() {
//   const [no1, setno1] = useState(0);
//   const [no2, setno2] = useState(0);
//   const [no3, setno3] = useState(0);
//   const add = () => setno3(+no1 + +no2);

//   const [no4, setno4] = useState(0);
//   const [no5, setno5] = useState(0);
//   const [no6, setno6] = useState(0);
//   const [rd, setrd] = useState(null);
//   const addd = () => {
//     let result = "";
//     if (rd == "+") result = +no4 + +no5;
//     else if (rd == "-") result = +no4 - +no5;
//     else if (rd == "*") result = +no4 * +no5;
//     else if (rd == "/") result = +no4 / +no5;
//     setno6(result);
//   };

//   return (
//     <>
//       <input name="no1" value={no1} onChange={(e) => setno1(e.target.value)} />
//       <input name="no2" value={no2} onChange={(e) => setno2(e.target.value)} />
//       <button type="button" onClick={add}>
//         add
//       </button>
//       <input name="no3" value={no3} disabled={true} />
//       <br />
//       <br />
//       <input name="no4" value={no4} onChange={(e) => setno4(e.target.value)} />
//       <input name="no5" value={no5} onChange={(e) => setno5(e.target.value)} />
//       <button type="button" onClick={addd}>
//         addd
//       </button>
//       <input name="no6" value={no6} disabled={true} />
//       <br />
//       <input
//         type="radio"
//         name="rd"
//         value="+"
//         checked={rd === "+"}
//         onChange={(e) => setrd(e.target.value)}
//       />
//       +
//       <input
//         type="radio"
//         name="rd"
//         value="-"
//         checked={rd === "-"}
//         onChange={(e) => setrd(e.target.value)}
//       />
//       -
//       <input
//         type="radio"
//         name="rd"
//         value="*"
//         checked={rd === "*"}
//         onChange={(e) => setrd(e.target.value)}
//       />
//       *
//       <input
//         type="radio"
//         name="rd"
//         value="/"
//         checked={rd === "/"}
//         onChange={(e) => setrd(e.target.value)}
//       />
//       /
//     </>
//   );
// }
// export default App;

//multiple checkbox selected
import React from "react";

const App = () => {
  const [allChecked, setAllChecked] = React.useState([]);

  function handleChange(e) {
    if (e.target.checked) {
      setAllChecked([...allChecked, e.target.value]);
    } else {
      setAllChecked(allChecked.filter((item) => item !== e.target.value));
    }
  }

  return (
    <>
      <div>
        <div>
          <input value="One" type="checkbox" onChange={handleChange} />
          <span> One </span>
        </div>
        <div>
          <input value="Two" type="checkbox" onChange={handleChange} />
          <span> Two </span>
        </div>
        <div>
          <input value="Three" type="checkbox" onChange={handleChange} />
          <span> Three </span>
        </div>
        <div>
          <input value="Four" type="checkbox" onChange={handleChange} />
          <span> Four </span>
        </div>
        <div>
          <input value="Five" type="checkbox" onChange={handleChange} />
          <span> Five </span>
        </div>
        <div>The all checked values are: {allChecked.join(", ")}</div>
      </div>
    </>
  );
};

export default App;
