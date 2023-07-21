import React from "react";
import { Link } from "react-scroll";
import About from "./Tabs/About";

export const Acapnes = () => {
  return (
    <div className="h-full min-h-screen w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-white p-10">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center text-center">
          <p
            className="text-[3.5rem] xl:text-[5.5rem] font-bold"
            style={{
              textShadow: "2px 2px 0px #000, -3px -3px 0px red",
            }}
          >
            Acapnes
          </p>
          {/* <p className="text-[4.5rem] font-bold">Acapnes</p> */}
          <p
            className="text-[1.5rem] xl:text-[2.5rem] text-center pb-2"
            style={{
              textShadow: "2px 2px 0px #000, -3px -3px 0px teal",
            }}
          >
            Junior Full-Stack Developer
          </p>
          <div className="flex flex-row items-center space-x-2 pb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <p className="font-semibold text-[1.15rem] xl:text-xl">Turkey</p>
          </div>
          <p
            className="font-semibold text-[1.15rem] xl:text-xl"
            style={{
              textShadow: "1px 1px 0px olive",
            }}
          >
            Passionate Software Engineer with a strong background in Computer
            Engineering. From a young age, I've been fascinated by technology
            and have spent years honing my skills in various programming
            languages, web development, and game development and database
            management systems (MSSQL, MongoDB, PostgreSQL). I thrive on
            challenging projects that push the boundaries of innovation and
            creativity. My experience in building mobile apps, web applications,
            and 3D games has given me a diverse set of skills to tackle complex
            problems. Always eager to learn and explore new technologies, I take
            pride in crafting efficient and impactful solutions. Outside of
            coding, I enjoy graphic design and creating digital art. I'm excited
            to continue my journey in the tech world, contributing to
            cutting-edge projects that entertain and inspire people worldwide.
          </p>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className=" grid md:grid-cols-4 lg:gap-6 md:gap-6 gap-2 py-10">
            <a
              href="https://github.com/Acapnes/"
              class="rounded px-5 py-2.5 overflow-hidden group bg-white text-black text-center text-[1.5rem]
            font-bold xl relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-600 hover:ring-2
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
              href="https://www.instagram.com/krigskaldr/"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span className="relative flex flex-row space-x-2">
                <p className="text-[1.5rem]">Instagram</p>
              </span>
            </a>
            <a
              href="mailto:acapnes@gmail.com"
              className="w-full px-6 py-2.5 relative rounded group overflow-hidden font-medium inline-block border-2 bg-red-500 bg-opacity-10"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-to-r group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] group-hover:h-full opacity-100 "></span>
              <div className="relative h-full w-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/61701011?v=4"
          className=" rounded-full object-cover"
          alt="AcapnesLogo"
        />
      </div>
    </div>
  );
};
