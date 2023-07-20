import React, { useState } from "react";
import About from "./About";
import Projects from "./Projects";
import Git from "./Git";

const TabManager = () => {
  const TabArray = ["About", "Projects", "GitHub"];
  const [SelectedTab, setSelectedTab] = useState(0);

  return (
    <div className="px-4 2xl:px-6 pt-10 h-full flex flex-col">
      <div className="w-full flex flex-row justify-around text-white text-3xl font-bold">
        {TabArray.map((TabName, TabIndex) => (
          <div className={`w-full flex flex-col justify-center`} key={TabIndex}>
            <button onClick={() => setSelectedTab(TabIndex)}>{TabName}</button>
            <div
              className={`h-1 mt-4 ${
                SelectedTab === TabIndex
                  ? "bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"
                  : "bg-white"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex-1 my-6 2xl:p-5">
        {(() => {
          switch (SelectedTab) {
            case 0:
              return <About />;
            case 1:
              return <Projects />;
            case 2:
              return <Git />;
            default:
              return <About />;
          }
        })()}
      </div>
    </div>
  );
};

export default TabManager;
