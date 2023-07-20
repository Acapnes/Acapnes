/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Acapnes } from "./Components/Acapnes";
import TabManager from "./Components/Tabs/TabManager";
import { Background } from "./Components/Background";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-cairo h-full w-full">
      <Background />
      <div>
        <Acapnes />
        <div id="main">
          <TabManager />
        </div>
      </div>
    </div>
  );
}

export default App;
