import React, { useState } from "react";
import "./style.css";

// Importing Components
import MyButton from "./MyButton";
import List from "./List";

function App() {
  const [counter, setCounter] = useState(0); // 0 is the default value here
  const [diff, setDiff] = useState(1);
  // useState returns the value and a function to update that value

  // function handleInputChange(event) {
  //   setCounter(event.target.value);
  // }

  // You need to return the content that needs to show up on the screen
  // Within the return block, anything in curly braces is treated as a javascript expression
  return (
    <div id="counter-container">
      <div
        className="counter-value" // in jsx instead of class, we have className
      >
        <p>{counter}</p>
        {/* To display a variable's value, we enclose it in curly brackets */}
      </div>

      <div id="counter-button-container">
        <MyButton
          // These are props passed to the Component, think of them as parameters/arguments
          // props can be used to pass down values, functions etc
          // We can reuse components using props
          counter={counter}
          setCounter={setCounter}
          value={diff}
          text="ADD"
        />

        <input
          type="number"
          value={counter}
          onChange={(event) => setCounter(event.target.value)}
          // we have to pass a function to the "event listener"
          // we can also do onChange={handleInputChange}
        />

        <MyButton
          counter={counter}
          setCounter={setCounter}
          value={-diff}
          text="SUBTRACT"
        />
      </div>

      <div className="diff-container">
        <label htmlFor="diff">
          Number to change by:{" "}
          <input
            id="diff"
            type="number"
            value={diff}
            onChange={(event) => setDiff(Number(event.target.value))}
          />
        </label>
      </div>

      <List />
    </div>
  );
}

// Every React component must have a default export
export default App;
