/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Acapnes = () => {
  return (
    <div className="h-screen min-h-[48rem] w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center text-white ">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <p className="text-[4.5rem] font-bold">Acapnes</p>
        <p className="text-[2.5rem] text-center font-light">
          Junior Full-Stack Developer
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:gap-6 md:gap-6 gap-2 pt-10">
          <a
            href="https://github.com/Acapnes/"
            className="border-4 py-2 px-5 rounded-full border-stone-500 items-center flex flex-row space-x-3 hover:bg-stone-600 hover:bg-opacity-70 hover:border-stone-400"
          >
            <img src="/assets/github.svg" />
            <p className="text-[1.5rem]">GitHub</p>
          </a>
          <a
            href="https://linkedin.com/in/acapnes/"
            className="border-4 py-2 px-5 rounded-full border-stone-500 items-center flex flex-row space-x-3 hover:bg-stone-600 hover:bg-opacity-70 hover:border-stone-400"
          >
            <img src="/assets/linkedin.svg" />
            <p className="text-[1.5rem]">LinkedIn</p>
          </a>

          <a
            href="https://instagram.com/pbmsss/"
            className="border-4 py-2 px-5 rounded-full border-stone-500 flex flex-row space-x-3 hover:bg-stone-600 hover:bg-opacity-70 hover:border-stone-400"
          >
            <img src="/assets/instagram.svg" />
            <p className="text-[1.5rem]">Instagram</p>
          </a>
        </div>
      </div>
      <div>
        <a
          className="flex justify-center items-center"
          href="https://github.com/Acapnes"
        >
          <img
            src="https://avatars.githubusercontent.com/u/61701011?v=4"
            className="w-[60%] h-[60%] rounded-full"
          />
        </a>
        <div class="h-8 w-8 bg-blue-600 transition-opacity ease-in-out duration-700 opacity-50  light:opacity-100"></div>
      </div>
    </div>
  );
};
