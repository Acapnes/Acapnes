/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Projects } from "./components/Projects";
import { Background } from "./components/Background";
import { Git } from "./components/Git";
import { Acapnes } from "./components/Acapnes";

function App() {
  return (
    <div className="h-full w-[100%] pb-10">
      <Background />
      <div className="h-full grid grid-rows">
        <Acapnes />
        <Projects />
        <Git />
      </div>
    </div>
  );
}

export default App;
