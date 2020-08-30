import React, { useState } from "react";

function List() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);
  const [newItem, setNewItem] = useState("");

  // array map function returns an array after looping over all elements of the array
  const listToShow = list.map((listItem, index) => (
    <li key={`${listItem} - ${index}`}>{listItem}</li>
  ));
  // keys are used to track what has to be changed etc.
  // keys should be unique, try not to use index whenever possible

  function handleAddToList() {
    if (newItem === "") {
      alert("Don't add an empty element");
    } else setList([...list, newItem]);
    // Here we spread the initial list and then add the new item
  }

  return (
    <div className="list-container">
      <ul>{listToShow}</ul>

      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={handleAddToList} className="counter-button">
        ADD TO LIST
      </button>
    </div>
  );
}

export default List;
