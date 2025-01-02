import React from "react";
import { createRoot } from "react-dom";



const Pizza = () => {
  return React.createElement("h1", {}, "fuck man");
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pizza),
  ]);
};

const containter = document.getElementById("root");
console.log('hekko');


const root = createRoot(containter);
root.render(React.createElement(App));
