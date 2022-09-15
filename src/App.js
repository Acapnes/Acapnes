/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { About } from "./About";
import { Background } from "./Background";
import { Git } from "./Git";

function App() {
  return (
    <div className="h-full w-[100%] pb-10">
      <Background />
      <div className="h-full grid lg:grid-cols-2 sm:grid-cols-1">
        <About />
        <Git />
      </div>
    </div>
  );
}

export default App;
