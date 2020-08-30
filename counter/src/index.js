import React from "react"; // Is imported so we can use jsx
import ReactDOM from "react-dom"; // Is imported once so we can tell React where to render our app
import App from "./App"; // The App component is imported, must have PascalCase naming-scheme
import * as serviceWorker from "./serviceWorker";

// Tells React what to render and where
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // You must return a single element, but you may have many other elements inside that element
  document.getElementById("root") // Everything gets rendered inside the div with id root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
