import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <>
      <div>
        <h1>podre pad</h1>
        <Pizza name="shakil" image="/public/pizzas/big_meat.webp" />
      </div>
    </>
  );
};

const containter = document.getElementById("root");
const root = createRoot(containter);
root.render(React.createElement(App));
