import React from "react";
import { createRoot } from "react-dom/client";



const Pizza = () => {
  return React.createElement("h1", {}, "fugg man");
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pizza),
    React.createElement(Pizza),
    React.createElement(Pizza),
  ]);
};

const containter = document.getElementById("root");
console.log('hekko');


const root = createRoot(containter);
root.render(React.createElement(App));
