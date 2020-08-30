import React from "react";

function MyButton(props) {
  const { setCounter, counter, value, text } = props;
  // We desctructure props for easy use here
  // else we can also do: props.value, props.text etc

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
