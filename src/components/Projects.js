/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Projects = () => {
  return (
    <div className="px-8 grid grid-cols-1 min-h-screen h-fit mt-5">
      <div className="pb-2 text-white text-4xl font-bold items-center flex justify-center border-b-2 border-white mb-5">
        Projects
      </div>

      <div className="w-full py-4 lg:px-10 md:px-5 grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-center mb-8">
        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">Anduril BOT</p>
              <p>
                Moderation & Music discord bot with Lord of The Rings themes.
              </p>
              <div className="w-full flex flex-row justify-end space-x-1 font-semibold text-sm">
                <p className="text-yellow-400">JavaScript</p>
                <p className="text-gray-300">ES6</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="./assets/discord_bot.png"
                className="w-[10rem] md:w-[12rem] object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">Lost & Found App</p>
              <p>
                Mobile application where found items are saved and lost items
                are found.
              </p>
              <div className="w-full flex flex-row justify-end space-x-1 ">
                <p className="text-sm text-blue-400 font-semibold">Flutter</p>
                <p className="text-sm text-purple-700 font-semibold">PHP</p>
                <p className="text-sm text-gray-300 font-semibold">MSSQL</p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/lost_mj.png"
                className="w-[10rem] h-full object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">Dieator</p>
              <p>
                Dieator creates personalized meal plans based on your body
                values and daily activities. Reach your diet and nutritional
                goals with our calorie calculator, weekly meal plans, grocery
                lists and more. Create your meal plan right here in seconds.
              </p>
              <div className="w-full flex flex-row justify-end space-x-1 ">
                <p className="text-sm text-blue-400 font-semibold">React</p>
                <p className="text-sm text-cyan-400 font-semibold">
                  TailwindCSS
                </p>
                <p className="text-sm text-red-400 font-semibold">NestJS</p>
                <p className="text-sm text-green-400 font-semibold">MongoDB</p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/dieator.png"
                className="w-[10rem] h-full object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">Pictopia</p>
              <div className="flex flex-col">
                <p>
                  Pictopia a social picture sharing platform are shared into
                  categories.
                </p>
                <p>
                  Share new pictures, save pictures you like, make comments
                  them.
                </p>
              </div>
              <div className="w-full flex flex-row justify-end space-x-1 ">
                <p className="text-sm text-blue-400 font-semibold">React</p>
                <p className="text-sm text-cyan-400 font-semibold">
                  TailwindCSS
                </p>
                <p className="text-sm text-red-400 font-semibold">NestJS</p>
                <p className="text-sm text-green-400 font-semibold">MongoDB</p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/pictopia.png"
                className="w-[10rem] h-full object-cover md:rounded-r-sm bg-gray-200"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">Carster</p>
              <p>
                A website where the features of cars are exhibited and sold.
              </p>
              <div className="w-full flex flex-row justify-end space-x-1 ">
                <p className="text-sm text-orange-400 font-semibold">HTML </p>
                <p className="text-sm text-purple-400 font-semibold">CSS </p>
                <p className="text-sm text-yellow-400 font-semibold">
                  JavaScript
                </p>
                <p className="text-sm text-purple-700 font-semibold">PHP</p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/car_dealer.png"
                className="w-[10rem] h-full object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">Lets Chat!</p>
              <div className="flex flex-col">
                <p>Take a selfie</p>
                <p>Share with your friends what you are doing now!</p>
                <p>Send photo,video,code or message to your friends!</p>
              </div>
              <div className="w-full flex flex-row justify-end space-x-1">
                <p className="text-sm text-orange-400 font-semibold">HTML </p>
                <p className="text-sm text-purple-400 font-semibold">CSS </p>
                <p className="text-sm text-yellow-400 font-semibold">
                  JavaScript
                </p>
                <p className="text-sm text-purple-700 font-semibold">PHP</p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/chat_app.png"
                className="w-[14rem] h-full object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row  justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">SQL Managemer</p>
              <div className="flex flex-col">
                <p>SQL extended management interface.</p>
                <p>
                  Creating, editing sql tables and outputs class, json formats.
                </p>
              </div>

              <div className="w-full flex flex-row justify-end space-x-1 ">
                <p className="text-sm text-blue-600 font-semibold">React </p>
                <p className="text-sm text-purple-500 font-semibold">
                  Bootstrap
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/transfer.png"
                className="w-[10rem] h-full object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>

        <div className="group transform w-fit h-fit transition duration-500 px-10 py-4 hover:scale-110 flex flex-col items-center">
          <div className="w-full flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            <div className="flex flex-col justify-center space-y-1 text-lg bg-slate-700 bg-opacity-40 w-full py-2 px-4 text-[1rem] font-light rounded-sm text-gray-300 text-center">
              <p className="font-bold text-xl">File Transfer Service</p>
              <div className="flex flex-col">
                <p>Extanted SQL management desktop application.</p>
                <p>
                  Editing SQL tables with grid views.Get backup, scripts.
                  Convert to SQLite format or edit.
                </p>
              </div>

              <div className="w-full flex flex-row justify-end space-x-1 ">
                <p className="text-sm text-green-500 font-semibold">NodeJS </p>
                <p className="text-sm text-white font-semibold">ExpressJS </p>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img
                src="./assets/dashboard.jpg"
                className="w-[10rem] h-full object-cover md:rounded-r-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
