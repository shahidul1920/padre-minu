import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";

const App = () => {
  return (
    <>
      <div>
        <Order />
      </div>
    </>
  );
};

const containter = document.getElementById("root");
const root = createRoot(containter);
root.render(React.createElement(App));
