/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Acapnes } from "./Components/Acapnes";
import { Background } from "./Components/Background";

function App() {
  return (
    <div className="font-cairo h-full w-full">
      <Background />
      <div>
        <Acapnes />
      </div>
    </div>
  );
}

export default App;
