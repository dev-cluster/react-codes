import React from "react";

function MyButton(props) {
  const { setCounter, counter, value, text } = props;

  return (
    <div>
      <button
        onClick={() => setCounter(counter + value)}
        className="counter-button"
      >
        {text} {value}
      </button>
    </div>
  );
}

export default MyButton;
