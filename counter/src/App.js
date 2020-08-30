import React, { useState } from "react";
import "./style.css";
import MyButton from "./MyButton";

function App() {
  const [counter, setCounter] = useState(0);
  const [diff, setDiff] = useState(1);

  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  const [newItem, setNewItem] = useState("");

  const listToShow = list.map((listItem, index) => (
    <li key={`${listItem} - ${index}`}>{listItem}</li>
  ));

  return (
    <div className="counter-container">
      <div className="counter-value">
        <p>Counter Value: {counter}</p>
      </div>

      <div>
        <label htmlFor="diff">
          Diff:
          <input
            id="diff"
            type="number"
            value={diff}
            onChange={(event) => setDiff(Number(event.target.value))}
          />
        </label>
      </div>

      <div id="counter-button-container">
        <MyButton
          counter={counter}
          setCounter={setCounter}
          value={diff}
          text="ADD"
        />

        <input
          type="number"
          value={counter}
          onChange={(event) => setCounter(event.target.value)}
        />

        <MyButton
          counter={counter}
          setCounter={setCounter}
          value={-diff}
          text="SUBTRACT"
        />
      </div>

      <div>
        <ul>{listToShow}</ul>

        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={() => setList([...list, newItem])}>ADD TO LIST</button>
      </div>
    </div>
  );
}

export default App;
