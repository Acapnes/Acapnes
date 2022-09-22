/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Projects = () => {
  return (
    <div className="px-8 grid grid-rows h-fit">
      <div className="pb-2 text-white text-4xl font-bold items-center flex justify-center border-b-2 border-white mb-5">Projects</div>
      <div className="p-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center text-white hover:bg-gray-900 hover:bg-opacity-50">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold text-stone-500">Andruil Bot</p>
          <p className="text-lg font-light">
            Junior Full-Stack Developer Junior Full-Stack Developer Junior
            Full-Stack Developer Junior Full-Stack Developer Junior Full-Stack
            Developer Junior Full-Stack Developer Junior Full-Stack Developer
            Junior Full-Stack Developer Junior Full-Stack Developer Junior
            Full-Stack Developer{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/assets/Anduril.png" className="w-40 rounded-xl" />
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center text-white hover:bg-gray-900 hover:bg-opacity-50">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold text-orange-400">
            Lost or Found
          </p>
          <p className="text-lg font-light">
            Junior Full-Stack Developer Junior Full-Stack Developer Junior
            Full-Stack Developer Junior Full-Stack Developer Junior Full-Stack
            Developer Junior Full-Stack Developer Junior Full-Stack Developer
            Junior Full-Stack Developer Junior Full-Stack Developer Junior
            Full-Stack Developer{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/lost_item.png"
            className="w-40 bg-orange-700 p-2 rounded-xl"
          />
        </div>
      </div>

      <div className="p-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center text-white hover:bg-gray-900 hover:bg-opacity-50">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold text-blue-400">Diet Helper</p>
          <p className="text-lg font-light">
            Junior Full-Stack Developer Junior Full-Stack Developer Junior
            Full-Stack Developer Junior Full-Stack Developer Junior Full-Stack
            Developer Junior Full-Stack Developer Junior Full-Stack Developer
            Junior Full-Stack Developer Junior Full-Stack Developer Junior
            Full-Stack Developer{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/assets/fit-bg.jpg" className="w-40 rounded-xl" />
        </div>
      </div>
    </div>
  );
};
