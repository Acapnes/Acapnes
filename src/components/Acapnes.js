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
            class="rounded px-5 py-2.5 overflow-hidden group bg-white text-black text-center text-[1.5rem]
            font-bold xl relative hover:bg-gradient-to-r hover:from-black hover:to-black hover:ring-2
            hover:ring-offset-2 hover:ring-black hover:text-white transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/acapnes/"
            class="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-md hover:bg-white group"
          >
            <span class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-md"></span>
            <span class="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600 text-center">
              <p className="text-[1.5rem]">LinkedIn</p>
            </span>
          </a>

          <a
            href="https://www.instagram.com/pbmsss/"
            class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
          >
            <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
            <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
            <span class="relative flex flex-row space-x-2">
              <p className="text-[1.5rem]">Instagram</p>
            </span>
          </a>
        </div>
        <button className="pt-14 animate-bounce">
          <img src="/assets/arrowdown.svg" />
        </button>
      </div>
      <div className="items-center flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/61701011?v=4"
          className="w-[60%] h-[60%] rounded-full"
        />
      </div>
    </div>
  );
};
