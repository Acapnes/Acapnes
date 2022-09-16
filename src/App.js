/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Projects } from "./Projects";
import { Background } from "./Background";
import { Git } from "./Git";
import { Acapnes } from "./Acapnes";

function App() {
  return (
    <div className="h-full w-[100%] pb-10">
      <Background />
      <div className="h-full grid grid-rows">
        <Acapnes/>
        <Projects />
        <Git />
      </div>
    </div>
  );
}

export default App;
