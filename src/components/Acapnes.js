import React from "react";
import { Link } from "react-scroll";

export const Acapnes = () => {
  const outlinedTextStyle = {
    fontWeight: "bold",
    textStroke: "1px black", // Outline rengi ve kalınlığı
    WebkitTextStroke: "1px black", // Safari için gereklidir
    background: "transparent",
    backgroundImage: "none",
    textShadow: "2px 2px 0px #000, -2px -2px 0px #a60202",
  };

  return (
    <div className="h-full min-h-screen w-full grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 text-gray-100 p-10">
      <div className="w-full h-full flex flex-col justify-center items-center space-y-4">
        <div className="w-full flex flex-col items-center text-center">
          <div className="flex flex-col -space-y-1 md:-space-y-3 xl:-space-y-7">
            <p
              className="text-[2.75rem] md:text-[4rem] xl:text-[5.5rem] font-bold "
              style={outlinedTextStyle}
            >
              ALPER SENPACACI
            </p>
            <p
              style={outlinedTextStyle}
              className="text-[1.75rem] md:text-[2rem] xl:text-[3rem]"
            >
              Software Engineer
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center pb-5">
          <p className="font-semibold text-[1.15rem] xl:text-xl">
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
        <div className="w-full grid md:grid-cols-3 lg:gap-5 md:gap-5 gap-3 pb-5">
          <a
            href="https://github.com/Acapnes/"
            class="rounded px-5 py-2.5 overflow-hidden group bg-white text-black text-center text-[1.5rem]
            font-bold xl relative hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-900 
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
            href="mailto:acapnes@gmail.com"
            className="w-full px-6 py-2.5 relative rounded-lg group overflow-hidden font-medium inline-block bg-red-500 bg-opacity-50"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gradient-to-r group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] group-hover:h-full opacity-100 "></span>
            <div className="relative h-full w-full flex items-center justify-center">
              <p className="text-[1.5rem]">Mail</p>
            </div>
          </a>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/61701011?v=4"
          className=" rounded-full object-cover border-4"
          alt="AcapnesLogo"
        />
      </div>
    </div>
  );
};
