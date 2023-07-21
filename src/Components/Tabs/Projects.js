/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Projects = () => {
  const ProjectsArray = [
    {
      title: "Anduril BOT",
      desc: "Moderation & Music discord bot with Lord of The Rings themes.",
      languages: ["JavaScript", "ES6"],
      thumbnail: "./assets/discord_bot.png",
    },
    {
      title: "Lost & Found App",
      desc: "Mobile application where found items are saved and lost items are found.",
      languages: ["Flutter", "PHP", "MSSQL"],
      thumbnail: "./assets/lost_mj.png",
    },
    {
      title: "Dieator",
      desc: "Dieator creates personalized meal plans based on your body values and daily activities. Reach your diet and nutritional goals with our calorie calculator, weekly meal plans, grocery lists and more. Create your meal plan right here in seconds.",
      languages: ["React", "TailwindCSS", "NestJS", "MongoDB"],
      thumbnail: "./assets/dieator.png",
    },
    {
      title: "File Transfer Service",
      desc: "Extanted SQL management desktop application. Editing SQL tables with grid views.Get backup, scripts. Convert to SQLite format or edit.",
      languages: ["NodeJS", "ExpressJS"],
      thumbnail: "./assets/dashboard.jpg",
    },
  ];

  const LanguageColors = {
    JavaScript: "text-yellow-400",
    ES6: "text-gray-300",
    Flutter: "text-blue-400",
    PHP: "text-purple-700",
    MSSQL: "text-gray-200",
    React: "text-blue-400",
    TailwindCSS: "text-cyan-400",
    NestJS: "text-red-400",
    MongoDB: "text-green-400",
    NodeJS: "text-green-500",
    ExpressJS: "text-green-600",
  };

  return (
    <div className="grid grid-cols-1">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-center">
        {ProjectsArray.map((Project, ProjectIndex) => (
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-between space-y-1 text-lg bg-slate-800 bg-opacity-30 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p
                className="font-bold text-3xl"
                style={{
                  textShadow: "2px 2px 0px #000, -2px -2px 0px purple",
                }}
              >
                {Project.title}
              </p>
              <p className="font-semibold">{Project.desc}</p>
              <div className="w-full flex flex-row justify-end space-x-1 font-semibold text-sm">
                {Project.languages.map((Language, LanguageIndex) => (
                  <p
                    className={`${LanguageColors[Language]}`}
                    style={{
                      textShadow: "2px 2px 0px #000, -2px -2px 0px purple",
                    }}
                  >
                    {Language}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={Project.thumbnail}
                className="w-[10rem] md:w-[12rem] object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
